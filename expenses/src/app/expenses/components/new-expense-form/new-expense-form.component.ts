import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/models/app-state.model';
import {ExpenseItem} from '../../../../core/models/expense-item.model';
import {AddExpenseAction} from '../../state/expenses.actions';
import {Observable, Subscription} from 'rxjs';
import {ExpensesService} from '../../../../core/services/expenses.service';
import * as moment from 'moment';
import _date = moment.unitOfTime._date;

@Component({
  selector: 'app-new-expense-form',
  templateUrl: './new-expense-form.component.html',
  styleUrls: ['./new-expense-form.component.scss']
})
export class NewExpenseFormComponent implements OnDestroy, OnInit {
  @Output() tableStatus = new EventEmitter<string>();

  expenseItems$: Observable<Array<ExpenseItem>>;
  subscribed: Subscription;
  totalArray = [];
  totalNumber: number;
  expenseForm: any;
  expenseType: 'single' | 'monthly';
  expenseItemDate: any;

  newExpensesItem: ExpenseItem = {
    id: '',
    name: '',
    type: null,
    dateAdded: '',
    takesPerMonth: null
  };

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private expenseService: ExpensesService,
  ) {
    this.expenseForm = this.fb.group({
      
      expensesType: ['', Validators.required],
      expenseName: ['', Validators.required],
      expenseTakes: ['', Validators.required],
      dateYear: [''],
    });
  }

  onSubmit() {
    console.log(this.expenseForm.value)
    this.addNewExpense();
    this.callMethod();
    this.tableStatus.emit('1');
    this.totalArray = [];
    this.totalNumber = 0;
    this.subscribed = this.expenseItems$.subscribe(data => data.map(a => this.totalArray.push(a.takesPerMonth)))
    if (this.totalArray.length !== 0) {
      this.totalNumber = this.totalArray.reduce((a, b) => {
        return a + b;
      });
    }
    
  }

  ngOnInit() { // generates current date for forms placeholders
    this.getDate();
  }

  ngOnDestroy() {
    if (this.subscribed) {
      this.subscribed.unsubscribe();
    }
  }

  addNewExpense() {
    this.newExpensesItem.id = this.generateId();
    this.newExpensesItem.name = this.expenseForm.value.expenseName;
   // checks if date is given when submiting a form if not gets current date (now input is disabled so uses current date)
    if (this.expenseForm.value.dateYear === '') {
      this.newExpensesItem.dateAdded = this.getDate();
    } else if (this.expenseForm.value.dateYear !== '') {
      this.newExpensesItem.dateAdded = this.expenseForm.value.dateYear;
    }
    this.newExpensesItem.type = this.expenseForm.value.expensesType
    this.expenseType = this.expenseForm.expenseType
    this.newExpensesItem.takesPerMonth = this.expenseForm.value.expenseTakes;
    this.store.dispatch(new AddExpenseAction(this.newExpensesItem));
    this.newExpensesItem = {
      id: '',
      name: '',
      type: null,
      dateAdded: '',
      takesPerMonth: null
    };
  }

  generateId() { // generates random id for our new item
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  getDate() { // gets current date and time
    this.expenseItemDate = new Date();
    return this.expenseItemDate;
  }

  // from tutorial

  callMethod() {
    this.expenseService.callComponentMethod();
  }


}







