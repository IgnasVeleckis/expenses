import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [ButtonComponent, IconComponent, InputComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
