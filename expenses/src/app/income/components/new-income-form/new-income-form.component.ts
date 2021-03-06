import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-income-form',
  templateUrl: './new-income-form.component.html',
  styleUrls: ['./new-income-form.component.scss']
})
export class NewIncomeFormComponent{

  constructor(
    private fb: FormBuilder,
  ) { }

  addIncomeForm = this.fb.group({
    name: ['', Validators.required],
    status: [''],
    generatesPerMonth: ['', Validators.required]
  });

  onSubmit() {
    console.log(this.addIncomeForm.value);
  }

}
