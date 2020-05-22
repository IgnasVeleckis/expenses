import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './containers/statistics/statistics.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';

import { ChartsModule } from 'ng2-charts';
import {SharedModule} from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DailyStatsComponent } from './components/daily-stats/daily-stats.component';
import { MonthlyStatsComponent } from './components/monthly-stats/monthly-stats.component';
import { YearlyStatsComponent } from './components/yearly-stats/yearly-stats.component';


@NgModule({
  declarations: [StatisticsComponent, ExpenseChartComponent, NavigationComponent, DailyStatsComponent, MonthlyStatsComponent, YearlyStatsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StatisticsModule { }
