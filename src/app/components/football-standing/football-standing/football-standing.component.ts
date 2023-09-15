import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../../models/football-standing';

@Component({
  selector: 'app-football-standing',
  templateUrl: './football-standing.component.html',
  styleUrls: ['./football-standing.component.css'],
})
export class FootballStandingComponent implements OnInit {
  responseData$: Observable<ResponseData[]> = of();
  constructor() {}

  ngOnInit() {}
}
