import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ExpenseItem} from '../../../../core/models/expense-item.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/models/app-state.model';
import { RemoveExpenseAction} from '../../state/expenses.actions';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  expenseItems$: Observable<Array<ExpenseItem>>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.expenseItems$ = this.store.select(store => store.expenses);
  }

  removeExpense(name: string) {
    this.store.dispatch(new RemoveExpenseAction(name));
  }

}
