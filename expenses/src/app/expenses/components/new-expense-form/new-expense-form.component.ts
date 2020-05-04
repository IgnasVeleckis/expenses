import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/models/app-state.model';
import {ExpenseItem} from '../../../../core/models/expense-item.model';
import {AddExpenseAction, RemoveExpenseAction} from '../../state/expenses.actions';
import {Observable, Subscription} from 'rxjs';
import {ExpensesService} from '../../../../core/services/expenses.service';

@Component({
  selector: 'app-new-expense-form',
  templateUrl: './new-expense-form.component.html',
  styleUrls: ['./new-expense-form.component.scss']
})
export class NewExpenseFormComponent {
  @Output() tableStatus = new EventEmitter();

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
  ) {}
  addExpenseForm = this.fb.group({
    name: ['', Validators.required],
    takesPerMonth: ['', Validators.required]
  });

  onSubmit() {
    this.addNewExpense();
    this.tableStatus.emit();
    this.totalArray = [];
    this.totalNumber = 0;
    this.subscribed = this.expenseItems$.subscribe(data => data.map(a => this.totalArray.push(a.takesPerMonth)))
    if (this.totalArray.length !== 0) {
      this.totalNumber = this.totalArray.reduce((a, b) => {
        return a + b;
      });
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







