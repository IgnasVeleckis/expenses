
import {IncomeItem} from '../../../core/models/income-item.model';
import {IncomeAction, IncomesActionTypes} from './incomes.actions';

const initialIncomeState: Array<IncomeItem> = [
  {
    id: '505h16ocfy2ewj1kpus3ba',
    name: 'Flat rent',
    status: 'monthly',
    generatesPerMonth: 1,
  },
  {
    id: '505h16ocfy2ewj1kpus3bb',
    name: 'Taxes',
    status: 'monthly',
    generatesPerMonth: 2,
  },
  {
    id: '505h16ocfy2ewj1kpus3bc',
    name: 'Car',
    status: 'monthly',
    generatesPerMonth: 3,
  },
  {
    id: '505h16ocfy2ewj1kpus3bd',
    name: 'Groceries',
    status: 'monthly',
    generatesPerMonth: 4,
  },
  {
    id: '505h16ocfy2ewj1kpus3be',
    name: 'Phones',
    status: 'monthly',
    generatesPerMonth: 5,
  },
  {
    id: '505h16ocfy2ewj1kpus3be',
    name: 'Phones',
    status: 'single',
    generatesPerMonth: 5,
  },
];

export function IncomeReducer(state: Array<IncomeItem> = initialIncomeState, action: IncomeAction) {
  switch (action.type) {
    case IncomesActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case IncomesActionTypes.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
