import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLogComponent } from './containers/all-log/all-log.component';
import { ListComponent } from './components/list/list.component';
import { IncomeLogComponent } from './containers/income-log/income-log.component';
import {CombinedLogComponent} from './containers/combined-log/combined-log.component';
import {ExpenseLogComponent} from './containers/expense-log/expense-log.component';
import { LogNavigationComponent } from './components/log-navigation/log-navigation.component';


@NgModule({
  declarations: [AllLogComponent, ListComponent, IncomeLogComponent, CombinedLogComponent, ExpenseLogComponent, LogNavigationComponent],
  imports: [
    CommonModule
  ]
})
export class LogsModule { }
