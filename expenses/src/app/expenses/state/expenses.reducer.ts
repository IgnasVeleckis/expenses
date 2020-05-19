import {ExpenseAction, ExpensesActionTypes} from './expenses.actions';
import { ExpenseItem } from '../../../core/models/expense-item.model';

const initialState: Array<ExpenseItem> = [
  {
    id: '505h16ocfy2ewj1kpus3ba',
    name: 'Flat rent',
    type: 'monthly',
    dateAdded: '2020-01-15',
    takesPerMonth: 150,
  },
  {
    id: '505h16ocfy2ewj1kpus3bb',
    name: 'Flat taxes',
    type: 'monthly',
    dateAdded: '2020-01-12',
    takesPerMonth: 80,
  },
  {
    id: '505h16ocfy2ewj1kpus3bc',
    name: 'Car fuel',
    type: 'monthly',
    dateAdded: '2020-01-07',
    takesPerMonth: 50,
  },
  {
    id: '505h16ocfy2ewj1kpus3bd',
    name: 'Dentist',
    type: 'single',
    dateAdded: '2020-01-07',
    takesPerMonth: 80,
  },
  {
    id: '505h16ocfy2ewj1kpus3be',
    name: 'Groceries',
    type: 'single',
    dateAdded: '2020-01-18',
    takesPerMonth: 27.35,
  },
  {
    id: '505h16ocfy2ewj1kpus3bf',
    name: 'Car fix',
    type: 'single',
    dateAdded: '2020-01-02',
    takesPerMonth: 50,
  },
  {
    id: '505h16ocfy2ewj1kpus3bg',
    name: 'Groceries',
    type: 'single',
    dateAdded: '2020-01-02',
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
