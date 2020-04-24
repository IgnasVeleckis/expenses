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


const COMPONENTS = [ButtonComponent, IconComponent, InputComponent, PieChartComponent]

@NgModule({
  declarations: [...COMPONENTS, RadarChartComponent, DoughnutChartComponent, BarChartComponent, LineChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [...COMPONENTS, LineChartComponent]
})
export class SharedModule { }
