import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ExpenseItem} from '../../../../core/models/expense-item.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/models/app-state.model';
import { RemoveExpenseAction} from '../../state/expenses.actions';
import {ExpensesService} from '../../../../core/services/expenses.service';

@Component({
  selector: 'app-expenses-monthly',
  templateUrl: './expenses-monthly.component.html',
  styleUrls: ['./expenses-monthly.component.scss']
})
export class ExpensesMonthlyComponent implements OnInit, OnDestroy {

  expenseItems$: Observable<Array<ExpenseItem>>
  totalArray = [];
  totalNumber: number;
  subscribed: Subscription;

  constructor(
    private store: Store<AppState>,
    private expenseService: ExpensesService
  ) {
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
    this.expenseItems$ = this.store.select(store => store.expenses.filter(a =>{
      return a.type === 'monthly'
    }
      ));

    this.calcTotal();
    
  }

  calcTotal() {
    this.subscribed = this.expenseItems$.subscribe(
      data => data.map(a =>
        this.totalArray.push(a.takesPerMonth) 
        )
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
    } else if(this.totalArray.length == 0) {
      this.totalNumber = 0;
    }

  }

}
