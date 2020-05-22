import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  chartLabel = 'This year expenses'
  chartsXAxis = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  chartsYAxis = [360, 320, 410, 295, 365, 330, 425, 300, 324, 386, 333, 466];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.chartsXAxis;
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.chartsYAxis, label: this.chartLabel }
  ];
  constructor() { }

  ngOnInit() {
  }

}
