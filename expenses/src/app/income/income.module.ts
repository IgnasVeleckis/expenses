import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './containers/income/income.component';
import { NewIncomeFormComponent } from './components/new-income-form/new-income-form.component';
import {SharedModule} from '../shared/shared.module';
import { IncomeListComponent } from './components/income-list/income-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {IncomeReducer} from './state/incomes.reducer';



@NgModule({
  declarations: [IncomeComponent, NewIncomeFormComponent, IncomeListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      'incomes', IncomeReducer
    )
  ]
})
export class IncomeModule { }
