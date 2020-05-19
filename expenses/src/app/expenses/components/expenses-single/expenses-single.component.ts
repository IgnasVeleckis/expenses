import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ExpenseItem } from 'src/core/models/expense-item.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/core/models/app-state.model';
import { ExpensesService } from 'src/core/services/expenses.service';
import { RemoveExpenseAction } from '../../state/expenses.actions';

@Component({
  selector: 'app-expenses-single',
  templateUrl: './expenses-single.component.html',
  styleUrls: ['./expenses-single.component.scss']
})
export class ExpensesSingleComponent implements OnInit {

  expenseItems$: Observable<Array<ExpenseItem>>
  totalArray = [];
  totalNumber: number;
  subscribed: Subscription;

  constructor(
    private store: Store<AppState>,
    private expenseService: ExpensesService
  ) {
    // from tutorial
    this.expenseService.componentMethodCalled$.
    subscribe(
      () => {
        this.totalArray = [];
        this.totalNumber = 0;
        this.calcTotal();
      }
    )
  }

  ngOnInit() {
    this.expenseItems$ = this.store.select(store => store.expenses.filter(a => {
      return a.type === 'single'
    }));
    this.calcTotal();
  }

  calcTotal() {
    this.subscribed = this.expenseItems$.subscribe(
      data => data.map(a => this.totalArray.push(a.takesPerMonth) )
    );
    if (this.totalArray.length > 0) {
      this.totalNumber = this.totalArray.reduce((a, b) => {
        return a + b;
      });
    }
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
