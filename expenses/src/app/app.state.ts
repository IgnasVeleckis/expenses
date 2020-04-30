import { ActionReducerMap } from '@ngrx/store';
import * as expenseStore from './expenses/state';

export interface AppState {
  expense: expenseStore.ExpensesState;
}

export const initialState: AppState = {
  expense: expenseStore.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  expense: expenseStore.reducer
}
