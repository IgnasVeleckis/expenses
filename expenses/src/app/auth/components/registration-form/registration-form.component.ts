import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: any;

  constructor(
    private fb: FormBuilder
  ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeat: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  alert(){
    console.log(this.registrationForm.value);
  }

}
