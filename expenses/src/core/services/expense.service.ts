import { Injectable } from '@angular/core';
import {IExpense} from '../models/IExpense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  tableStatus = false;
  constructor() { }

  listOfExpenses: IExpense[] = [
    {
      name: 'Car',
      takesPerMonth: 200
    },
    {
      name: 'Groceries',
      takesPerMonth: 150
    },
    {
      name: 'flat',
      takesPerMonth: 110
    }
  ];

  addToList(item) {
    this.listOfExpenses.push(item);
    console.log(this.listOfExpenses);
  }
}
