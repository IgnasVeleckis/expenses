import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() title: string;
  @Input() required: 'true';
  @Input() type: 'text' | 'submit';
  constructor() { }

  ngOnInit() {
  }

}
