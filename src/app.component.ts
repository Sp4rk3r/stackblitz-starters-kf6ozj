import { Component } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { BaseResponse } from './app/models/base-response';
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
  countries: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  standings$: Observable<ResponseData[]> = of();

  constructor(private footballService: FootballService) {}

  getLeagues(country: string) {
    console.log(country.toLowerCase());
    this.standings$ = this.footballService
      .getLeaugues('Premier League', country.toLowerCase())
      .pipe(
        switchMap((resp: Leagues) => {
          const leagueId = resp.league.id;
          return this.footballService.getStanding(leagueId);
        })
      );
  }
}
