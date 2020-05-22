import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import {PieChartComponent} from './charts/pie-chart/pie-chart.component';

import { ChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';


const COMPONENTS = [ButtonComponent, IconComponent, InputComponent]
const CHARTS = [PieChartComponent, BarChartComponent, RadarChartComponent, DoughnutChartComponent, LineChartComponent]

@NgModule({
  declarations: [...COMPONENTS, ...CHARTS],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [...COMPONENTS, ...CHARTS]
})
export class SharedModule { }
