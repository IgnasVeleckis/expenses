import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './containers/expenses/expenses.component';
import {SharedModule} from '../shared/shared.module';
import { ExpensesMonthlyComponent } from './components/expenses-monthly/expenses-monthly.component';
import { NewExpenseFormComponent } from './components/new-expense-form/new-expense-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {ExpenseReducer} from './state/expenses.reducer';
import { ListNavComponent } from './components/list-nav/list-nav.component';
import { ExpensesSingleComponent } from './components/expenses-single/expenses-single.component';



@NgModule({
  declarations: [ExpensesComponent, ExpensesMonthlyComponent, NewExpenseFormComponent, ListNavComponent, ExpensesSingleComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('expenses', ExpenseReducer)
  ]
})
export class ExpensesModule { }
