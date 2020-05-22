import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/core/models/app-state.model';
import { ExpenseItem } from 'src/core/models/expense-item.model';

@Component({
  selector: 'app-daily-stats',
  templateUrl: './daily-stats.component.html',
  styleUrls: ['./daily-stats.component.scss']
})
export class DailyStatsComponent implements OnInit, OnDestroy {
  expenseNamesToday = [];
  expenseAmountsToday = [];

  date: Date;
  dateFormated: string

  subscribed: Subscription;

  expenseItemsToday$: Observable<Array<ExpenseItem>>


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.date = new Date;
    this.dateFormated = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate()
    this.expenseItemsToday$ = this.store.select(store => store.expenses.filter(a => {
      return a.dateAdded === this.dateFormated
    }))
    this.getNamesAndData()
  }


  getNamesAndData() {
    this.subscribed = this.expenseItemsToday$.subscribe(
      name => name.map(a => this.expenseAmountsToday.push(a.takesPerMonth))
    )
    this.subscribed = this.expenseItemsToday$.subscribe(
      data => data.map(a => this.expenseNamesToday.push(a.name))
    )
   
  }

  ngOnDestroy() {
    if (this.subscribed) {
      this.subscribed.unsubscribe();
    }
  }

}
