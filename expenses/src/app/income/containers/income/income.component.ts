import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {
  incomeTableStatus = false;

  constructor() {}


  toggleAddIncomeTable() {
    this.incomeTableStatus = !this.incomeTableStatus;
  }

}
