import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../../../../core/services/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenseTableStatus: boolean;
  constructor(
    private expenseService: ExpenseService
  ) {
    this.expenseTableStatus = expenseService.tableStatus;
  }

  ngOnInit() {
  }

  toggleAddExpenseTable() {
    this.expenseTableStatus = !this.expenseTableStatus;
  }

}
