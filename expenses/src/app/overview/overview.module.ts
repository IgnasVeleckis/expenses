import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './containers/overview/overview.component';
import { AverageDailyExpenseComponent } from './components/average-daily-expense/average-daily-expense.component';
import { AverageDailyIncomeComponent } from './components/average-daily-income/average-daily-income.component';



@NgModule({
  declarations: [OverviewComponent, AverageDailyExpenseComponent, AverageDailyIncomeComponent],
  imports: [
    CommonModule
  ]
})
export class OverviewModule { }
