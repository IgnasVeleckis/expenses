import { Component  } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ExpenseService} from '../../../../core/services/expense.service';
import {AppState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {AddNewItem} from '../../state';

@Component({
  selector: 'app-new-expense-form',
  templateUrl: './new-expense-form.component.html',
  styleUrls: ['./new-expense-form.component.scss']
})
export class NewExpenseFormComponent {
  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private store: Store<AppState>,
  ) { }
  addExpenseForm = this.fb.group({
    name: ['', Validators.required],
    takesPerMonth: ['', Validators.required]
  });

  onSubmit() {
    console.log(this.addExpenseForm.value);
    this.expenseService.addToList(this.addExpenseForm.value);
    this.addItemToStore();
  }
  addItemToStore() {
    this.store.dispatch(
      new AddNewItem({
        name: 'lox',
        takesPerMonth: 600
      })
    )
  }
}
