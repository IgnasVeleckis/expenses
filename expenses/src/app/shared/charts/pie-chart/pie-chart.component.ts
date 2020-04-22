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

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public pieChartLabels: Label[] = ['groceries', 'Flat', 'Car', 'entertainment'];
  public pieChartData: SingleDataSet = [100, 50, 20, 15];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit() {
  }

}