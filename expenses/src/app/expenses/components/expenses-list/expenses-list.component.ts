import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../../../../core/services/expense.service';
import {IExpense} from '../../../../core/models/IExpense.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  expenseSource: IExpense[] = [];
  constructor(private expenseService: ExpenseService) {
    this.expenseSource = this.expenseService.listOfExpenses;
  }

  ngOnInit() {
    console.log(this.expenseSource);
  }

}
