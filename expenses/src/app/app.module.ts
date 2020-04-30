import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import {StoreModule} from '@ngrx/store';
import {initialState, reducers} from './app.state';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StoreModule.forRoot(reducers, {initialState})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
