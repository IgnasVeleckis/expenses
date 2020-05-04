import { Action } from '@ngrx/store';
import { IncomeItem } from '../../../core/models/income-item.model';

export enum IncomesActionTypes {
  ADD_ITEM = '[INCOMES] Add Item',
  REMOVE_ITEM = '[INCOMES] Remove Item',
}

export class AddIncomeAction implements Action {
  readonly type = IncomesActionTypes.ADD_ITEM;
  constructor(public payload: IncomeItem) {}
}


export class RemoveIncomeAction implements Action {
  readonly type = IncomesActionTypes.REMOVE_ITEM;
  constructor(public payload: string) {}
}

export type IncomeAction = AddIncomeAction | RemoveIncomeAction;
