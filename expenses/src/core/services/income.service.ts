import { Injectable } from '@angular/core';
import { IIncome } from 'src/app/income/components/income-list/income-list.component';
@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  tableStatus = false;
  total = [];

  listOfIncomes: IIncome[] = [
    {
      name: 'Job at UAB "Respublikos spaustuvė"',
      generatesPerMonth: 600,
      status: 'active'
    },
    {
      name: 'Rented flat',
      generatesPerMonth: 250,
      status: 'passive'
    }
  ];

  addToList(item){
    this.listOfIncomes.push(item);
    console.log(this.listOfIncomes);
    for(const item in this.listOfIncomes){
      this.total.push(this.listOfIncomes[item].generatesPerMonth);
    }

    console.log(this.total);

  }

}
