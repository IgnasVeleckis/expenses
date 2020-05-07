import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegistrationComponent } from './containers/registration/registration.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, LoginFormComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
