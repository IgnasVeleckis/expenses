import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ExpenseItem } from 'src/core/models/expense-item.model';
import { AppState } from 'src/core/models/app-state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-monthly-stats',
  templateUrl: './monthly-stats.component.html',
  styleUrls: ['./monthly-stats.component.scss']
})
export class MonthlyStatsComponent implements OnInit, OnDestroy {

  expenseAmountsMonthly = [];


  subscribed: Subscription;

  expenseItemsMonthly$: Observable<Array<ExpenseItem>>

  date: Date;
  dateFormated: string;
  thisMonth: string;

  sameDateCount = [];
  sameDateCountNum = 0;

  thisMonthsExpenseAmounts = [];
  thisMonthsExpenseDays = [];

  daysAndAmounts = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.date = new Date;
    this.dateFormated = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate()
    this.thisMonth = (this.date.getMonth() + 1).toString();
    this.expenseItemsMonthly$ = this.store.select(store => store.expenses.filter(a => {
      if(a.dateAdded.split('')[6] === '-'){
        return a.dateAdded.split('')[5] == this.thisMonth
      } else if (a.dateAdded.split('')[6] != '-') {
        return a.dateAdded.split('')[5] + a.dateAdded.split('')[6] == this.thisMonth
      }
    }))

    this.subscribed = this.expenseItemsMonthly$.subscribe(a => {
      for (let day in a) {
        if(a[day].dateAdded.split('')[6] === '-') { // jei menesis yra 1 sk
          if(a[day].dateAdded.split('').length === 8) { // jei dienos yra 1 sk
            this.thisMonthsExpenseDays.push(a[day].dateAdded.split('')[7])
            this.thisMonthsExpenseAmounts.push((a[day].takesPerMonth))
          }
          if(a[day].dateAdded.split('').length === 9) { // jei dienos yra 2 sk
            this.thisMonthsExpenseDays.push(a[day].dateAdded.split('')[7] + a[day].dateAdded.split('')[8])
            this.thisMonthsExpenseAmounts.push(a[day].takesPerMonth)
          }
        }
        if(a[day].dateAdded.split('')[7] === '-') { // jei menesis yra 2 sk
          if(a[day].dateAdded.split('').length === 9) { // jei dienos yra 1 sk
            this.thisMonthsExpenseDays.push(a[day].dateAdded.split('')[8])
            this.thisMonthsExpenseAmounts.push(a[day].takesPerMonth)
          }
          if(a[day].dateAdded.split('').length === 10) { // jei dienos yra 2 sk
            this.thisMonthsExpenseDays.push(a[day].dateAdded.split('')[8] + a[day].dateAdded.split('')[9])
            this.thisMonthsExpenseAmounts.push(a[day].takesPerMonth)
          }
        }
      }
    })

    for(let item in this.thisMonthsExpenseAmounts) {
      this.daysAndAmounts.push(
        {
          date: this.thisMonthsExpenseDays[item],
          takes: this.thisMonthsExpenseAmounts[item],
        }
      )
    }
    
    this.daysAndAmounts.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
    for (let i = 0; i < this.daysAndAmounts.length - 1; i++) {
      for (let i = 0; i < this.daysAndAmounts.length - 1; i++) {
        if(this.daysAndAmounts[i].date === this.daysAndAmounts[i+1].date){
          this.daysAndAmounts[i].takes = this.daysAndAmounts[i].takes + this.daysAndAmounts[i + 1].takes
          this.daysAndAmounts.splice(this.daysAndAmounts.indexOf(this.daysAndAmounts[i + 1]), 1)
        }
      }
    }

    this.expenseAmountsMonthly = this.daysAndAmounts;
 
    // console.log(this.expenseAmountsMonthly)
  }

  ngOnDestroy() {
    if (this.subscribed) {
      this.subscribed.unsubscribe();
    }
  }



}
