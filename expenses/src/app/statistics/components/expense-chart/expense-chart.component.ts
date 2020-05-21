import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { Store } from '@ngrx/store';
import { AppState } from 'src/core/models/app-state.model';
import { Observable } from 'rxjs';
import { ExpenseItem } from 'src/core/models/expense-item.model';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss']
})
export class ExpenseChartComponent implements OnInit, OnDestroy {
  expenseNames = [];
  expenseAmounts = [];
  
  subscribed: Subscription;
  expenseItemsMonthly$: Observable<Array<ExpenseItem>>


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.expenseItemsMonthly$ = this.store.select(store => store.expenses.filter(a => {
      return a.type === 'monthly'
    }));
    this.getNamesAndData()

  }

  getNamesAndData() {
    this.subscribed = this.expenseItemsMonthly$.subscribe(
      name => name.map(a => this.expenseAmounts.push(a.takesPerMonth))
    )
    this.subscribed = this.expenseItemsMonthly$.subscribe(
      data => data.map(a => this.expenseNames.push(a.name))
    )
  }

  ngOnDestroy() {
    if (this.subscribed) {
      this.subscribed.unsubscribe();
    }
  }


}
