import {Component, Input, OnInit} from '@angular/core';
import {ExpensesService} from '../../../../core/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {

  tableShow = false;

  expenseNavStatus: 'monthly' | 'single';

  constructor() {}

  toggleTable() {
    this.tableShow = !this.tableShow;
  }

  change(value) {
    this.expenseNavStatus = value;
  }



}


