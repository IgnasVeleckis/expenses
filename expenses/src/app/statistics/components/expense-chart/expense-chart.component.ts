import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { Store } from '@ngrx/store';
import { AppState } from 'src/core/models/app-state.model';
import { Observable, Subscription } from 'rxjs';
import { ExpenseItem } from 'src/core/models/expense-item.model';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss']
})
export class ExpenseChartComponent implements OnInit, OnDestroy {
  expenseNamesMon = [];
  expenseAmountsMon = [];

  expenseNamesSin = [];
  expenseAmountsSin = [];
  
  subscribed: Subscription;
  expenseItemsMonthly$: Observable<Array<ExpenseItem>>
  expenseItemsSingle$: Observable<Array<ExpenseItem>>


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.expenseItemsMonthly$ = this.store.select(store => store.expenses.filter(a => {
      return a.type === 'monthly'
    }));
    this.expenseItemsSingle$ = this.store.select(store => store.expenses.filter(a => {
      return a.type === 'single'
    }))
    this.getNamesAndData()

  }

  getNamesAndData() {
    this.subscribed = this.expenseItemsMonthly$.subscribe(
      name => name.map(a => this.expenseAmountsMon.push(a.takesPerMonth))
    )
    this.subscribed = this.expenseItemsMonthly$.subscribe(
      data => data.map(a => this.expenseNamesMon.push(a.name))
    )

    this.subscribed = this.expenseItemsSingle$.subscribe(
      name => name.map(a => this.expenseAmountsSin.push(a.takesPerMonth))
    )
    this.subscribed = this.expenseItemsSingle$.subscribe(
      data => data.map(a => this.expenseNamesSin.push(a.name))
    )
  }

  ngOnDestroy() {
    if (this.subscribed) {
      this.subscribed.unsubscribe();
    }
  }


}
