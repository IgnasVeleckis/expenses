import {ExpenseAction, ExpensesActionTypes} from './expenses.actions';
import { ExpenseItem } from '../../../core/models/expense-item.model';

const initialState: Array<ExpenseItem> = [
  {
    id: '505h16ocfy2ewj1kpus3ba',
    name: 'Flat rent',
    type: 'monthly',
    dateAdded: '2020-1-11',
    takesPerMonth: 23,
  },
  {
    id: '505h16ocfy2ewj1kpus3bt',
    name: 'Flat rent',
    type: 'monthly',
    dateAdded: '2020-5-23',
    takesPerMonth: 12,
  },
  {
    id: '505h16ocfy2ewj1kpus3by',
    name: 'Flat rent',
    type: 'monthly',
    dateAdded: '2020-5-24',
    takesPerMonth: 150,
  },
  {
    id: '505h16ocfy2ewj1kpus3bx',
    name: 'Flat taxes',
    type: 'monthly',
    dateAdded: '2020-1-12',
    takesPerMonth: 80,
  },
  {
    id: '505h16ocfy2ewj1kpus3bc',
    name: 'Car fuel',
    type: 'monthly',
    dateAdded: '2020-1-13',
    takesPerMonth: 50,
  },
  {
    id: '505h16ocfy2ewj1kpus3bd',
    name: 'Dentist',
    type: 'single',
    dateAdded: '2020-1-7',
    takesPerMonth: 80,
  },
  {
    id: '505h16ocfy2ewj1kpus3be',
    name: 'Groceries',
    type: 'single',
    dateAdded: '2020-1-18',
    takesPerMonth: 27.35,
  },
  {
    id: '505h16ocfy2ewj1kpus3bf',
    name: 'Car fix',
    type: 'single',
    dateAdded: '2020-1-22',
    takesPerMonth: 50,
  },
  {
    id: '505h16ocfy2ewj1kpus3bg',
    name: 'Groceries',
    type: 'single',
    dateAdded: '2020-1-27',
    takesPerMonth: 35,
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
