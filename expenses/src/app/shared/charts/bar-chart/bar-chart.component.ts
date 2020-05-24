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
  @Input() statData // : number[];
  
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
    this.splitIntoAxis()
  }

  splitIntoAxis() {
    for(let i = 1; i < 32; i++){
      this.chartsXAxis.push(i.toString())
    }

    console.log(this.chartYAxis)
    
    for (let i = 1; i < 32; i++) {
      let pushZero
      for(let y = 0; y < this.statData.length; y++) {
        if (i == this.statData[y].date) {
          
          this.chartYAxis.pop()
          this.chartYAxis.push(this.statData[y].takes)
          pushZero = 'false'
        } else {
          pushZero = 'true'
        }  
      } 
        
      if (pushZero == 'true') {
        this.chartYAxis.push(0)
        pushZero = 'false'
      }
     

    }
    
  }

}
