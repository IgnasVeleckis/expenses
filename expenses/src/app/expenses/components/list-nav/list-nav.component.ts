import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-nav',
  templateUrl: './list-nav.component.html',
  styleUrls: ['./list-nav.component.scss']
})
export class ListNavComponent implements OnInit {
  activeMonthly;
  activeSingle;
  @Output() loadedExpense = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.changeExpenses('monthly');
  }

  changeExpenses(value) {
    this.loadedExpense.emit(value);
    if (value === 'monthly') {
      this.activeMonthly = true;
      this.activeSingle = false;
    } else if (value === 'single') {
      this.activeMonthly = false;
      this.activeSingle = true;
    }
  }

}
