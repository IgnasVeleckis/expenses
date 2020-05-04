import { Action } from '@ngrx/store';
import { ExpenseItem } from '../../../core/models/expense-item.model';

export enum ExpensesActionTypes {
  ADD_ITEM = '[EXPENSES] Add Item',
  REMOVE_ITEM = '[EXPENSES] Remove Item',
}

export class AddExpenseAction implements Action {
  readonly type = ExpensesActionTypes.ADD_ITEM;

  constructor(public payload: ExpenseItem) {}
}

export class RemoveExpenseAction implements Action {
  readonly type = ExpensesActionTypes.REMOVE_ITEM;

  constructor(public payload: string) {}
}


export type ExpenseAction = AddExpenseAction | RemoveExpenseAction;
