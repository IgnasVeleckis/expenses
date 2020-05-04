import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './containers/expenses/expenses.component';
import {SharedModule} from '../shared/shared.module';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { NewExpenseFormComponent } from './components/new-expense-form/new-expense-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {ExpenseReducer} from './state/expenses.reducer';



@NgModule({
  declarations: [ExpensesComponent, ExpensesListComponent, NewExpenseFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('expenses', ExpenseReducer)
  ]
})
export class ExpensesModule { }
