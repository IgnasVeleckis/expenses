import { Component  } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ExpenseService} from '../../../../core/services/expense.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-new-expense-form',
  templateUrl: './new-expense-form.component.html',
  styleUrls: ['./new-expense-form.component.scss']
})
export class NewExpenseFormComponent {
  constructor(
    private fb: FormBuilder,
  ) { }
  addExpenseForm = this.fb.group({
    name: ['', Validators.required],
    takesPerMonth: ['', Validators.required]
  });

  onSubmit() {

  }

}
