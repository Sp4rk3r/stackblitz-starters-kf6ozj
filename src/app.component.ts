import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { BaseResponse } from './app/models/base-response';
import { CountryLeague } from './app/models/country-league';
import {
  FootballStanding,
  LeagueData,
  ResponseData,
} from './app/models/football-standing';
import { Leagues } from './app/models/leagues';
import { FootballService } from './app/services/football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipe-database';
  countries: CountryLeague[] = [
    { name: 'England', league: 'Premier League' },
    { name: 'Spain', league: 'La Liga' },
    { name: 'Germany', league: 'Bundesliga' },
    { name: 'France', league: 'Ligue 1' },
    { name: 'Italy', league: 'Serie A' },
  ];
  standings$: Observable<ResponseData[]> = of();

  constructor(private footballService: FootballService) {}

  getLeagues(country: string, league: string) {
    console.log(country.toLowerCase());
    this.standings$ = this.footballService
      .getLeaugues(league, country.toLowerCase())
      .pipe(
        switchMap((resp: Leagues) => {
          const leagueId = resp.league.id;
          return this.footballService.getStanding(leagueId);
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }
}
