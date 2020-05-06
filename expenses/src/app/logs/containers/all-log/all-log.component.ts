import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-all-log',
  templateUrl: './all-log.component.html',
  styleUrls: ['./all-log.component.scss']
})
export class AllLogComponent implements OnInit {

  logStatus: 'combined' | 'expense' | 'income';

  constructor() { }

  ngOnInit() {
  }

  change(value) {
    this.logStatus = value;
  }

}
