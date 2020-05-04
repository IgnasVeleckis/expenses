import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IncomeItem} from '../../../../core/models/income-item.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/models/app-state.model';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit{

  incomeItems$: Observable<Array<IncomeItem>>;

  constructor(
    private store: Store<AppState>
  ) {}


  ngOnInit() {
    this.incomeItems$ = this.store.select(store => store.incomes);
  }



}
