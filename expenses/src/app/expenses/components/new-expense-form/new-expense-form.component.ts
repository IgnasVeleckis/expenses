import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/models/app-state.model';
import {ExpenseItem} from '../../../../core/models/expense-item.model';
import {AddExpenseAction} from '../../state/expenses.actions';
import {Observable, Subscription} from 'rxjs';
import {ExpensesService} from '../../../../core/services/expenses.service';

@Component({
  selector: 'app-new-expense-form',
  templateUrl: './new-expense-form.component.html',
  styleUrls: ['./new-expense-form.component.scss']
})
export class NewExpenseFormComponent implements OnDestroy {
  @Output() tableStatus = new EventEmitter<string>();

  expenseItems$: Observable<Array<ExpenseItem>>;
  subscribed: Subscription;
  totalArray = [];
  totalNumber: number;

  newExpensesItem: ExpenseItem = {
    id: '',
    name: '',
    takesPerMonth: null
  };

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private expenseService: ExpensesService
  ) {
    // from tutorial
    this.expenseService.componentMethodCalled$.
      subscribe(
      () => {
        alert('method called')
      }
    )
  }


  addExpenseForm = this.fb.group({
    name: ['', Validators.required],
    takesPerMonth: ['', Validators.required]
  });

  onSubmit() {
    this.addNewExpense();
    this.tableStatus.emit('1');
    this.totalArray = [];
    this.totalNumber = 0;
    this.subscribed = this.expenseItems$.subscribe(data => data.map(a => this.totalArray.push(a.takesPerMonth)))
    if (this.totalArray.length !== 0) {
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


  addNewExpense() {
    this.newExpensesItem.id = this.generateId();
    this.newExpensesItem.name = this.addExpenseForm.value.name;
    this.newExpensesItem.takesPerMonth = this.addExpenseForm.value.takesPerMonth;
    this.store.dispatch(new AddExpenseAction(this.newExpensesItem));
    this.newExpensesItem = {
      id: '',
      name: '',
      takesPerMonth: null
    };
  }



  generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}







