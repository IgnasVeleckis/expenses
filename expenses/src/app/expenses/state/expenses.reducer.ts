import {ExpenseAction, ExpensesActionTypes} from './expenses.actions';
import { ExpenseItem } from '../../../core/models/expense-item.model';

const initialState: Array<ExpenseItem> = [
  {
    id: '505h16ocfy2ewj1kpus3ba',
    name: 'Flat rent',
    takesPerMonth: 1,
  },
  {
    id: '505h16ocfy2ewj1kpus3bb',
    name: 'Taxes',
    takesPerMonth: 2,
  },
  {
    id: '505h16ocfy2ewj1kpus3bc',
    name: 'Car',
    takesPerMonth: 3,
  },
  {
    id: '505h16ocfy2ewj1kpus3bd',
    name: 'Groceries',
    takesPerMonth: 4,
  },
  {
    id: '505h16ocfy2ewj1kpus3be',
    name: 'Phones',
    takesPerMonth: 5,
  },
];

export function ExpenseReducer(state: Array<ExpenseItem> = initialState, action: ExpenseAction) {
  switch (action.type) {
    case ExpensesActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ExpensesActionTypes.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
