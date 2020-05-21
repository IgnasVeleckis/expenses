import {Component, Input, OnInit} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() title: string;
  @Input() statNames: [];
  @Input() statData: [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet; 
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit() {
    this.pieChartLabels = this.statNames;
    this.pieChartData = this.statData
  }

}
