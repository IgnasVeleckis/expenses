import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statisticsNavStatus: 'yearStat' | 'monthStat' | 'dayStat';
  constructor() { }

  ngOnInit() {
  }

  change(value) {
    this.statisticsNavStatus = value;
  }

}
