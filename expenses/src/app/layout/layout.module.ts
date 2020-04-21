import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {RouterModule} from '@angular/router';
import { MainComponent } from './containers/main/main.component';
import {ExpensesModule} from '../expenses/expenses.module';
import {IncomeModule} from '../income/income.module';
import {LogsModule} from '../logs/logs.module';
import {StatisticsModule} from '../statistics/statistics.module';
import {LandingModule} from '../landing/landing.module';
import {OverviewModule} from '../overview/overview.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideNavComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    ExpensesModule,
    IncomeModule,
    LogsModule,
    StatisticsModule,
    LandingModule,
    OverviewModule
  ]

})
export class LayoutModule {

}
