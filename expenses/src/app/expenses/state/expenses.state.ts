import {IExpenseList} from '../../../core/models/IExpense.model';

export interface ExpensesState {
  listOfExpenses: IExpenseList[];
}

export const initialState: ExpensesState = {} as ExpensesState;
