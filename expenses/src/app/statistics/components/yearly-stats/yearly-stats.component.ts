import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/core/models/app-state.model';
import { Subscription, Observable } from 'rxjs';
import { ExpenseItem } from 'src/core/models/expense-item.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-yearly-stats',
  templateUrl: './yearly-stats.component.html',
  styleUrls: ['./yearly-stats.component.scss']
})
export class YearlyStatsComponent implements OnInit, OnDestroy {

  expenseAmountsYearly = [];

  subscribed: Subscription;

  expenseItemsYearly$: Observable<Array<ExpenseItem>>;

  date: Date;
  thisYear: string;

  thisYearsArray = []


  thisYearsAmounts = []
  thisYearsMonths = []

  monthsAndAmounts = []

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.date = new Date();
    this.thisYear = this.date.getFullYear().toString();


    this.expenseItemsYearly$ = this.store.select(store => store.expenses.filter(a => {
      return a.dateAdded.split('')[2] + a.dateAdded.split('')[3] == this.thisYear.split('')[2] + this.thisYear.split('')[3]
    }));

    

    this.subscribed = this.expenseItemsYearly$.subscribe(a => {
      for(let i = 0; i < a.length; i++) {
        this.thisYearsArray.push(a[i])
      }
    })

    for (let i = 0; i < this.thisYearsArray.length; i++) {
      
      if(this.thisYearsArray[i].dateAdded.split('')[6] == '-') {
        this.thisYearsAmounts.push(this.thisYearsArray[i].takesPerMonth)
        this.thisYearsMonths.push(this.thisYearsArray[i].dateAdded.split('')[5])
      } else if(this.thisYearsArray[i].dateAdded.split('')[7] == '-') {
        this.thisYearsAmounts.push(this.thisYearsArray[i].takesPerMonth)
        this.thisYearsMonths.push(this.thisYearsArray[i].dateAdded.split('')[5] + this.thisYearsArray[i].dateAdded.split('')[6])
      }
    }


    for(let item in this.thisYearsAmounts) {
      this.monthsAndAmounts.push(
        {
          date: this.thisYearsMonths[item],
          takes: this.thisYearsAmounts[item]
        }
      )
      
    }
    this.monthsAndAmounts.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
    for (let i = 0; i < this.monthsAndAmounts.length - 1; i++) {
      for (let i = 0; i < this.monthsAndAmounts.length - 1; i++) {
        if(this.monthsAndAmounts[i].date === this.monthsAndAmounts[i+1].date){
          this.monthsAndAmounts[i].takes = this.monthsAndAmounts[i].takes + this.monthsAndAmounts[i + 1].takes
          this.monthsAndAmounts.splice(this.monthsAndAmounts.indexOf(this.monthsAndAmounts[i + 1]), 1)
        }
      }
    }

    this.expenseAmountsYearly = this.monthsAndAmounts;

// pafixint months kad nedetu diena atgal

    // reik paduot array su objects {date: menesis, takes: kiek paima per men}
  }

  ngOnDestroy() {
    if(this.subscribed) {
      this.subscribed.unsubscribe();
    }
  }

}
