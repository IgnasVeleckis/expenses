import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './containers/landing/landing.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { LandingNavigationComponent } from './components/landing-navigation/landing-navigation.component';



@NgModule({
  declarations: [LandingComponent, TitleComponent, LandingNavigationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LandingModule { }
