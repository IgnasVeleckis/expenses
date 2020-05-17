import {ExpenseAction, ExpensesActionTypes} from './expenses.actions';
import { ExpenseItem } from '../../../core/models/expense-item.model';

const initialState: Array<ExpenseItem> = [
  {
    id: '505h16ocfy2ewj1kpus3ba',
    name: 'Flat rent',
    type: 'monthly',
    dateAdded: '2020-01-01',
    takesPerMonth: 1,
  },
  {
    id: '505h16ocfy2ewj1kpus3bb',
    name: 'Taxes',
    type: 'monthly',
    dateAdded: '1997-08-18',
    takesPerMonth: 2,
  },
  {
    id: '505h16ocfy2ewj1kpus3bc',
    name: 'Car',
    type: 'monthly',
    dateAdded: '1966-01-02',
    takesPerMonth: 3,
  },
  {
    id: '505h16ocfy2ewj1kpus3bd',
    name: 'Dentist',
    type: 'single',
    dateAdded: '2020-01-01',
    takesPerMonth: 1,
  },
  {
    id: '505h16ocfy2ewj1kpus3be',
    name: 'Groceries',
    type: 'single',
    dateAdded: '1997-08-18',
    takesPerMonth: 2,
  },
  {
    id: '505h16ocfy2ewj1kpus3bf',
    name: 'Car fix',
    type: 'single',
    dateAdded: '1966-01-02',
    takesPerMonth: 3,
  },
];

export function ExpenseReducer(state: Array<ExpenseItem> = initialState, action: ExpenseAction) {
  switch (action.type) {
    case ExpensesActionTypes.ADD_ITEM:
      console.log(initialState)
      return [...state, action.payload];
    case ExpensesActionTypes.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
