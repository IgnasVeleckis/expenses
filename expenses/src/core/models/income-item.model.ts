export interface IncomeItem {
  id: string;
  name: string;
  status: 'monthly' | 'single';
  generatesPerMonth: number;
}
