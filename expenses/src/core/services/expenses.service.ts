import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {


  private totalNumber = new Subject<any>();
  customObservable = this.totalNumber.asObservable();

  constructor() { }

  totalExpenses(val: any) {
    this.totalNumber.next(val);
    console.log(this.totalNumber);
  }


}
