import { ActionReducerMap } from '@ngrx/store';
import { ExpenseReducer } from '../expenses/state/expenses.reducer';
import { IncomeReducer } from '../income/state/incomes.reducer';


export const reducers: ActionReducerMap<any> = {
  expensesReducer: ExpenseReducer,
  incomesReducer: IncomeReducer
}

