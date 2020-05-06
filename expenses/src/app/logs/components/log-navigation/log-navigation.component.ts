import {Component, EventEmitter, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-log-navigation',
  templateUrl: './log-navigation.component.html',
  styleUrls: ['./log-navigation.component.scss']
})

export class LogNavigationComponent implements OnInit {
  activeCombined;
  activeIncome;
  activeExpense;


  @Output() loadedLogs = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.changeLogs('income');
  }

  changeLogs(value) {
    this.loadedLogs.emit(value);
    if (value === 'income') {
      this.activeIncome = true;
      this.activeExpense = false;
      this.activeCombined = false;
    } else if (value === 'expense') {
      this.activeIncome = false;
      this.activeExpense = true;
      this.activeCombined = false;
    } else if (value === 'combined') {
      this.activeIncome = false;
      this.activeExpense = false;
      this.activeCombined = true;
    }
  }

}
