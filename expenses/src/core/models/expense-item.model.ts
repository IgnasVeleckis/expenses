export interface ExpenseItem {
  id: string;
  name: string;
  type: 'monthly' | 'single';
  dateAdded: string;
  takesPerMonth: number;
}
