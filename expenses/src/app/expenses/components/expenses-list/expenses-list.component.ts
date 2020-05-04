import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ExpenseItem} from '../../../../core/models/expense-item.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/models/app-state.model';
import { RemoveExpenseAction} from '../../state/expenses.actions';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit, OnDestroy {

  expenseItems$: Observable<Array<ExpenseItem>>
  totalArray = [];
  totalNumber: number;
  subscribed: Subscription;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.expenseItems$ = this.store.select(store => store.expenses);
    this.subscribed = this.expenseItems$.subscribe(
      data => data.map(a => this.totalArray.push(a.takesPerMonth) )
    )
    this.totalNumber = this.totalArray.reduce((a, b) => {
      return a + b;
    });
  }

  ngOnDestroy() {
    if (this.subscribed) {
      this.subscribed.unsubscribe();
    }
  }

  removeExpense(name: string) {
    this.store.dispatch(new RemoveExpenseAction(name));
    this.totalArray = [];
    this.totalNumber = 0;
    this.subscribed = this.expenseItems$.subscribe(data => data.map(a => this.totalArray.push(a.takesPerMonth) ))
    if (this.totalArray.length !== 0) {
      this.totalNumber = this.totalArray.reduce((a, b) => {
        return a + b;
      });
    }

  }

}
