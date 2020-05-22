import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  yearStat: boolean;
  monthStat: boolean;
  dayStat: boolean;
  @Output() loadedStatistics = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.changeExpenses('dayStat');
  }

  changeExpenses(value) {
    this.loadedStatistics.emit(value);
    if (value === 'yearStat') {
      this.yearStat = true;
      this.monthStat = false;
      this.dayStat = false;
    } else if (value === 'monthStat') {
      this.yearStat = false;
      this.monthStat = true;
      this.dayStat = false;
    } else if(value === 'dayStat') {
      this.yearStat = false;
      this.monthStat = false;
      this.dayStat = true;
    }
  }

}
