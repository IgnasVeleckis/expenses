import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  tableStatus = false;
  constructor() { }

  toggleTable() {
    this.tableStatus = !this.tableStatus;
  }
}
