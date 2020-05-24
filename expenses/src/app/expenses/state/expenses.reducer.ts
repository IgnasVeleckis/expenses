import {ExpenseAction, ExpensesActionTypes} from './expenses.actions';
import { ExpenseItem } from '../../../core/models/expense-item.model';

const initialState: Array<ExpenseItem> = [

  { id: '505h160fy2ewj1kpus3ba',
    name: '0-test',
    type: 'single',
    dateAdded: '2020-5-8',     
    takesPerMonth: 6 
  },
  { id: '505h161fy2ewj1kpus3ba',
    name: '1-test',
    type: 'single',
    dateAdded: '2020-5-7',     
    takesPerMonth: 11 
  },        
  { id: '505h162fy2ewj1kpus3ba',
    name: '2-test',
    type: 'single',
    dateAdded: '2020-5-7',     
    takesPerMonth: 1 
  },
  { id: '505h163fy2ewj1kpus3ba',
    name: '3-test',
    type: 'single',
    dateAdded: '2020-5-3',
    takesPerMonth: 6 
  },
  { id: '505h164fy2ewj1kpus3ba',
    name: '4-test',
    type: 'single',
    dateAdded: '2020-5-2',
    takesPerMonth: 8 
  },
  { id: '505h165fy2ewj1kpus3ba',
    name: '5-test',
    type: 'single',
    dateAdded: '2020-5-0',
    takesPerMonth: 9 
  },
  { id: '505h166fy2ewj1kpus3ba',
    name: '6-test',
    type: 'single',
    dateAdded: '2020-5-17',
    takesPerMonth: 5 
  },
  { id: '505h167fy2ewj1kpus3ba',
    name: '7-test',
    type: 'single',
    dateAdded: '2020-5-2',
    takesPerMonth: 4 
  },
  { id: '505h168fy2ewj1kpus3ba',
    name: '8-test',
    type: 'single',
    dateAdded: '2020-5-19',
    takesPerMonth: 18 
  },
  { id: '505h169fy2ewj1kpus3ba',
    name: '9-test',
    type: 'single',
    dateAdded: '2020-5-7',
    takesPerMonth: 6 
  },
  { id: '505h1610fy2ewj1kpus3ba',
    name: '10-test',
    type: 'single',
    dateAdded: '2020-5-27',
    takesPerMonth: 6 
  },
  { id: '505h1611fy2ewj1kpus3ba',
    name: '11-test',
    type: 'single',
    dateAdded: '2020-5-10',
    takesPerMonth: 3 
  },
  { id: '505h1612fy2ewj1kpus3ba',
    name: '12-test',
    type: 'single',
    dateAdded: '2020-5-1',
    takesPerMonth: 2 
  },
  { id: '505h1613fy2ewj1kpus3ba',
    name: '13-test',
    type: 'single',
    dateAdded: '2020-5-13',
    takesPerMonth: 3 
  },
  { id: '505h1614fy2ewj1kpus3ba',
    name: '14-test',
    type: 'single',
    dateAdded: '2020-5-3',
    takesPerMonth: 16 
  },
  { id: '505h1615fy2ewj1kpus3ba',
    name: '15-test',
    type: 'single',
    dateAdded: '2020-5-22',
    takesPerMonth: 0 
  },
  { id: '505h1616fy2ewj1kpus3ba',
    name: '16-test',
    type: 'single',
    dateAdded: '2020-5-1',
    takesPerMonth: 3 
  },
  { id: '505h1617fy2ewj1kpus3ba',
    name: '17-test',
    type: 'single',
    dateAdded: '2020-5-0',
    takesPerMonth: 10 
  },
  { id: '505h1618fy2ewj1kpus3ba',
    name: '18-test',
    type: 'single',
    dateAdded: '2020-5-16',
    takesPerMonth: 17 
  },
  { id: '505h1619fy2ewj1kpus3ba',
    name: '19-test',
    type: 'single',
    dateAdded: '2020-5-2',
    takesPerMonth: 3 
  },
  { id: '505h1620fy2ewj1kpus3ba',
    name: '20-test',
    type: 'single',
    dateAdded: '2020-5-15',
    takesPerMonth: 16 
  },
  { id: '505h1621fy2ewj1kpus3ba',
    name: '21-test',
    type: 'single',
    dateAdded: '2020-5-1',
    takesPerMonth: 8 
  },
  { id: '505h1622fy2ewj1kpus3ba',
    name: '22-test',
    type: 'single',
    dateAdded: '2020-5-29',
    takesPerMonth: 17 
  },
  { id: '505h1623fy2ewj1kpus3ba',
    name: '23-test',
    type: 'single',
    dateAdded: '2020-5-7',
    takesPerMonth: 5 
  },
  { id: '505h1624fy2ewj1kpus3ba',
    name: '24-test',
    type: 'single',
    dateAdded: '2020-5-11',
    takesPerMonth: 4 
  },
  { id: '505h1625fy2ewj1kpus3ba',
    name: '25-test',
    type: 'single',
    dateAdded: '2020-5-11',
    takesPerMonth: 8 
  },
  { id: '505h1626fy2ewj1kpus3ba',
    name: '26-test',
    type: 'single',
    dateAdded: '2020-5-6',
    takesPerMonth: 16 
  },
  { id: '505h1627fy2ewj1kpus3ba',
    name: '27-test',
    type: 'single',
    dateAdded: '2020-5-0',
    takesPerMonth: 17 
  },
  { id: '505h1628fy2ewj1kpus3ba',
    name: '28-test',
    type: 'single',
    dateAdded: '2020-5-11',
    takesPerMonth: 4 
  },
  { id: '505h1629fy2ewj1kpus3ba',
    name: '29-test',
    type: 'single',
    dateAdded: '2020-5-20',
    takesPerMonth: 14 
  },
  { id: '505h1630fy2ewj1kpus3ba',
    name: '30-test',
    type: 'monthly',
    dateAdded: '2020-5-13',
    takesPerMonth: 13 
  },
  { id: '505h1631fy2ewj1kpus3ba',
    name: '31-test',
    type: 'monthly',
    dateAdded: '2020-5-11',
    takesPerMonth: 12 
  },
  { id: '505h1632fy2ewj1kpus3ba',
    name: '32-test',
    type: 'monthly',
    dateAdded: '2020-5-9',
    takesPerMonth: 15 
  },
  { id: '505h1633fy2ewj1kpus3ba',
    name: '33-test',
    type: 'monthly',
    dateAdded: '2020-5-22',
    takesPerMonth: 10 
  },
  { id: '505h1634fy2ewj1kpus3ba',
    name: '34-test',
    type: 'monthly',
    dateAdded: '2020-5-22',
    takesPerMonth: 19 
  },
  { id: '505h1635fy2ewj1kpus3ba',
    name: '35-test',
    type: 'monthly',
    dateAdded: '2020-5-18',
    takesPerMonth: 19 
  },
  { id: '505h1636fy2ewj1kpus3ba',
    name: '36-test',
    type: 'monthly',
    dateAdded: '2020-5-10',
    takesPerMonth: 3 
  },
  { id: '505h1637fy2ewj1kpus3ba',
    name: '37-test',
    type: 'monthly',
    dateAdded: '2020-5-24',
    takesPerMonth: 3 
  },
  { id: '505h1638fy2ewj1kpus3ba',
    name: '38-test',
    type: 'monthly',
    dateAdded: '2020-5-24',
    takesPerMonth: 17 
  },
  { id: '505h1639fy2ewj1kpus3ba',
    name: '39-test',
    type: 'monthly',
    dateAdded: '2020-5-8',
    takesPerMonth: 7 
  },
  { id: '505h1640fy2ewj1kpus3ba',
    name: '40-test',
    type: 'monthly',
    dateAdded: '2020-5-12',
    takesPerMonth: 8 
  },
  { id: '505h1641fy2ewj1kpus3ba',
    name: '41-test',
    type: 'monthly',
    dateAdded: '2020-5-15',
    takesPerMonth: 17 
  },
  { id: '505h1642fy2ewj1kpus3ba',
    name: '42-test',
    type: 'monthly',
    dateAdded: '2020-5-18',
    takesPerMonth: 14 
  },
  { id: '505h1643fy2ewj1kpus3ba',
    name: '43-test',
    type: 'monthly',
    dateAdded: '2020-5-16',
    takesPerMonth: 10 
  },
  { id: '505h1644fy2ewj1kpus3ba',
    name: '44-test',
    type: 'monthly',
    dateAdded: '2020-5-23',
    takesPerMonth: 17 
  },
  { id: '505h1645fy2ewj1kpus3ba',
    name: '45-test',
    type: 'monthly',
    dateAdded: '2020-5-25',
    takesPerMonth: 16 
  },
  { id: '505h1646fy2ewj1kpus3ba',
    name: '46-test',
    type: 'monthly',
    dateAdded: '2020-5-28',
    takesPerMonth: 15 
  },
  { id: '505h1647fy2ewj1kpus3ba',
    name: '47-test',
    type: 'monthly',
    dateAdded: '2020-5-21',
    takesPerMonth: 14 
  },
  { id: '505h1648fy2ewj1kpus3ba',
    name: '48-test',
    type: 'monthly',
    dateAdded: '2020-5-9',
    takesPerMonth: 11 
  },
  { id: '505h1649fy2ewj1kpus3ba',
    name: '49-test',
    type: 'monthly',
    dateAdded: '2020-5-1',
    takesPerMonth: 11 
  },
  { id: '505h1650fy2ewj1kpus3ba',
    name: '50-test',
    type: 'monthly',
    dateAdded: '2020-5-28',
    takesPerMonth: 12 
  },
  { id: '505h1651fy2ewj1kpus3ba',
    name: '51-test',
    type: 'monthly',
    dateAdded: '2020-5-23',
    takesPerMonth: 9 
  },
  { id: '505h1652fy2ewj1kpus3ba',
    name: '52-test',
    type: 'monthly',
    dateAdded: '2020-5-25',
    takesPerMonth: 17 
  },
  { id: '505h1653fy2ewj1kpus3ba',
    name: '53-test',
    type: 'monthly',
    dateAdded: '2020-5-23',
    takesPerMonth: 9 
  },
  { id: '505h1654fy2ewj1kpus3ba',
    name: '54-test',
    type: 'monthly',
    dateAdded: '2020-5-29',
    takesPerMonth: 3 
  },
  { id: '505h1655fy2ewj1kpus3ba',
    name: '55-test',
    type: 'monthly',
    dateAdded: '2020-5-19',
    takesPerMonth: 10 
  },
  { id: '505h1656fy2ewj1kpus3ba',
    name: '56-test',
    type: 'monthly',
    dateAdded: '2020-5-18',
    takesPerMonth: 14 
  },
  { id: '505h1657fy2ewj1kpus3ba',
    name: '57-test',
    type: 'monthly',
    dateAdded: '2020-5-15',
    takesPerMonth: 4 
  },
  { id: '505h1658fy2ewj1kpus3ba',
    name: '58-test',
    type: 'monthly',
    dateAdded: '2020-5-1',
    takesPerMonth: 7 
  },
  { id: '505h1659fy2ewj1kpus3ba',
    name: '59-test',
    type: 'monthly',
    dateAdded: '2020-5-8',
    takesPerMonth: 14 
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
