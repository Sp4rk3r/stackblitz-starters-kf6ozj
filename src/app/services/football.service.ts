import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseResponse } from '../models/base-response';
import { Country } from '../models/country';
import { FootballStanding, LeagueData } from '../models/football-standing';
import { Leagues } from '../models/leagues';

@Injectable()
export class FootballService {
  url: string = 'https://v3.football.api-sports.io/';
  api_key: string = '1068e7f6fb43bfc1f50bef4ffa8cae45';
  httpHeader = new HttpHeaders().set('x-rapidapi-key', this.api_key);

  constructor(private http: HttpClient) {}

  getCountry(name: string): Observable<Country[]> {
    this.httpHeader.set('name', name);
    return this.http.get<Country[]>(`${this.url}/countries`);
  }

  getLeaugues(leagueName: string, country: string): Observable<Leagues> {
    return this.http
      .get<BaseResponse<Leagues[]>>(
        `${
          this.url
        }/leagues?name=${leagueName}&country=${country}&season=${new Date().getFullYear()}`,
        { headers: this.httpHeader }
      )
      .pipe(map((data) => data.response[0]));
  }

  getStanding(leagueId: number): Observable<LeagueData[]> {
    return this.http
      .get<BaseResponse<LeagueData[]>>(
        `${
          this.url
        }/standings?league=${leagueId}&season=${new Date().getFullYear()}`,
        { headers: this.httpHeader }
      )
      .pipe(map((data) => data.response));
  }
}
