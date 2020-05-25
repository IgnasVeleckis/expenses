import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() title: string;
  @Input() statData;
  @Input() for: 'month' | 'year';
  
  chartsXAxis = [];
  chartYAxis = [];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.chartsXAxis;
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.chartYAxis, label: this.title }
  ];
  constructor() { }

  ngOnInit() {
    if(this.for === 'month') {
      this.splitIntoAxis(32)
    } else if(this.for === 'year') {
      this.splitIntoAxis(13)
    }
  }

  splitIntoAxis(splitInto: number) {
    for (let i = 1; i < splitInto; i++) {
      this.chartsXAxis.push(i.toString());
      this.chartYAxis.push(0);
      for (let x = 0; x < this.statData.length; x++) {
        if (i == this.statData[x].date) {
          this.chartYAxis[i] = this.statData[x].takes
        } 
      }
    }
    this.chartYAxis.shift()
  }
}
