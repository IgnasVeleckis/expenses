import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/models/app-state.model';
import {ExpenseItem} from '../../../../core/models/expense-item.model';
import {AddExpenseAction, RemoveExpenseAction} from '../../state/expenses.actions';

@Component({
  selector: 'app-new-expense-form',
  templateUrl: './new-expense-form.component.html',
  styleUrls: ['./new-expense-form.component.scss']
})
export class NewExpenseFormComponent {
  @Output() tableStatus = new EventEmitter();

  newExpensesItem: ExpenseItem = {
    id: '',
    name: '',
    takesPerMonth: null
  };

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}
  addExpenseForm = this.fb.group({
    name: ['', Validators.required],
    takesPerMonth: ['', Validators.required]
  });

  onSubmit() {
    this.addNewExpense();
    this.tableStatus.emit();
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







