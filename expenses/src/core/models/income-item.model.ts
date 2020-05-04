export interface IncomeItem {
  id: string;
  name: string;
  status: 'active' | 'passive' | 'single';
  generatesPerMonth: number;
}
