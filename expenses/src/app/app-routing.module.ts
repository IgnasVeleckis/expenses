import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/containers/landing/landing.component';
import { MainComponent } from './layout/containers/main/main.component';
import {OverviewComponent} from './overview/containers/overview/overview.component';
import {StatisticsComponent} from "./statistics/containers/statistics/statistics.component";
import {IncomeComponent} from "./income/containers/income/income.component";
import {ExpensesComponent} from "./expenses/containers/expenses/expenses.component";
import {AllLogComponent} from "./logs/containers/all-log/all-log.component";


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'budget',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      {
        path: 'income',
        component: IncomeComponent
      },
      {
        path: 'expenses',
        component: ExpensesComponent
      },
      {
        path: 'logs',
        component: AllLogComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
