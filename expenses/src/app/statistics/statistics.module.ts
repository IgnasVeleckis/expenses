import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './containers/statistics/statistics.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { IncomeChartComponent } from './components/income-chart/income-chart.component';
import { HighestExpenseComponent } from './components/highest-expense/highest-expense.component';

import { ChartsModule } from 'ng2-charts';
import {SharedModule} from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [StatisticsComponent, ExpenseChartComponent, IncomeChartComponent, HighestExpenseComponent, NavigationComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StatisticsModule { }
