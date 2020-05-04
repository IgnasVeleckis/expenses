import { ExpenseItem } from './expense-item.model';
import {IncomeItem} from './income-item.model';

export interface AppState {
  readonly expenses: Array<ExpenseItem>;
  readonly incomes: Array<IncomeItem>;
}
