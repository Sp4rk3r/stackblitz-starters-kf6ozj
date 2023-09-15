import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../../models/football-standing';

@Component({
  selector: 'app-football-standing',
  templateUrl: './football-standing.component.html',
  styleUrls: ['./football-standing.component.scss'],
})
export class FootballStandingComponent implements OnInit {
  @Input() ResponseData: Observable<ResponseData[]> = of();
  constructor() {}

  ngOnInit() {}
}
