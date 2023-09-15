import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError, of } from 'rxjs';
import { BaseResponse } from '../models/base-response';
import { Country } from '../models/country';
import {
  FootballStanding,
  LeagueData,
  ResponseData,
} from '../models/football-standing';
import { Leagues } from '../models/leagues';

@Injectable()
export class FootballService {
  constructor(private http: HttpClient) {}

  getCountry(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`/countries`);
  }

  getLeaugues(leagueName: string, country: string): Observable<Leagues> {
    return this.http
      .get<BaseResponse<Leagues[]>>(
        `/leagues?name=${leagueName}&country=${country}&season=${new Date().getFullYear()}`
      )
      .pipe(
        map((data) => data.response[0]),
        
      );
  }

  getStanding(leagueId: number): Observable<ResponseData[]> {
    return this.http
      .get<BaseResponse<ResponseData[]>>(
        `/standings?league=${leagueId}&season=${new Date().getFullYear()}`
      )
      .pipe(map((data) => data.response));
  }
}
