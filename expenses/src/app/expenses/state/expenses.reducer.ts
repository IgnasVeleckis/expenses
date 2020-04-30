import { ADD_NEW_ITEM, REMOVE_ITEM } from './expenses.actions';
import * as programActions from './expenses.actions';

export function reducer(state: any, action: programActions.ExpensesAction): any {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      console.log('REDUCER ' + ADD_NEW_ITEM);
      return {
        ...state,
        itemList: [
          {
            name: 'tax',
            takesPerMonth: 600
          }
        ]
      };
    }
    case REMOVE_ITEM: {
      console.log('REDUCER ' + REMOVE_ITEM);
      return {
        ...state,
        itemList: [
          {
            name: 'tax',
            takesPerMonth: 600
          }
        ]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
