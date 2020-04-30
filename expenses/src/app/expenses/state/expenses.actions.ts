import { Action } from '@ngrx/store';

export const ADD_NEW_ITEM = 'Add New Item';
export const REMOVE_ITEM = 'Remove Item';


export class AddNewItem implements Action {
  readonly type: string = ADD_NEW_ITEM;
  constructor(public payload: any) {
    console.log('ACTION ' + ADD_NEW_ITEM);
  }
}


export class RemoveItem implements Action {
  readonly type: string = REMOVE_ITEM;
  constructor(public payload: any) {
    console.log('ACTION ' + REMOVE_ITEM);
  }
}


export type ExpensesAction = AddNewItem | RemoveItem;
