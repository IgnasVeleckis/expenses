import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLogComponent } from './containers/all-log/all-log.component';
import { IncomeLogComponent } from './containers/income-log/income-log.component';
import { ExpenseLogComponent } from './containers/expense-log/expense-log.component';



@NgModule({
  declarations: [AllLogComponent, IncomeLogComponent, ExpenseLogComponent],
  imports: [
    CommonModule
  ]
})
export class LogsModule { }
