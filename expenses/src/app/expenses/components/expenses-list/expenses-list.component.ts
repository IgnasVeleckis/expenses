import { Component, OnInit } from '@angular/core';
import {AppState} from '../../../../core/models/app-state.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ExpenseListItem} from '../../../../core/models/IExpense.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
