import { Component, OnInit } from '@angular/core';
import {IncomeService} from '../../../../core/services/income.service';

export interface IIncome {
  name: string;
  generatesPerMonth: number;
  status: 'passive' | 'active' | 'single';
}

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {

  incomeSource: IIncome[] = [];
  constructor(private incomeService: IncomeService) {
    this.incomeSource = this.incomeService.listOfIncomes;
  }

  ngOnInit() {
    console.log(this.incomeSource);
  }

}
