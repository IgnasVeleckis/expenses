import { Component, OnInit } from '@angular/core';
import {IncomeService} from '../../../../core/services/income.service';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {
  incomeTableStatus: boolean;

  constructor(
    private incomeService: IncomeService,
  ) {
    this.incomeTableStatus = incomeService.tableStatus;
  }


  toggleAddIncomeTable() {
    this.incomeTableStatus = !this.incomeTableStatus;
  }

}
