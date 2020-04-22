import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './containers/expenses/expenses.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [ExpensesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExpensesModule { }
