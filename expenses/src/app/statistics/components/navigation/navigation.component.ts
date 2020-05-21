import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  activeExpenses;
  activeIncomes;
  @Output() loadedStatistics = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.changeExpenses('expenses');
  }

  changeExpenses(value) {
    this.loadedStatistics.emit(value);
    if (value === 'monthly') {
      this.activeExpenses = true;
      this.activeIncomes = false;
    } else if (value === 'single') {
      this.activeExpenses = false;
      this.activeIncomes = true;
    }
  }

}
