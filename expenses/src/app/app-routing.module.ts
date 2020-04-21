import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/containers/landing/landing.component';
import { MainComponent } from './layout/containers/main/main.component';
import {OverviewComponent} from './overview/containers/overview/overview.component';


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
        component: OverviewComponent
      },
      {
        path: 'statistics',
        component: LandingComponent
      },
      {
        path: 'income',
        component: LandingComponent
      },
      {
        path: 'expenses',
        component: LandingComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
