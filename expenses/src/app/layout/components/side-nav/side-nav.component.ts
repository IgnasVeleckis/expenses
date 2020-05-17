import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  active1: boolean;
  active2: boolean;
  active3: boolean;
  active4: boolean;
  active5: boolean;

  constructor() { }

  ngOnInit() {
  }

  activateRouterLink1() {
    for (let i = 0; i < 5; i++) {
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
    }
    this.active1 = !this.active1;
}
  activateRouterLink2() {
      for (let i = 0; i < 5; i++) {
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        this.active4 = false;
        this.active5 = false;
      }
      this.active2 = !this.active2;
  }
  activateRouterLink3() {
      for (let i = 0; i < 5; i++) {
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        this.active4 = false;
        this.active5 = false;
      }
      this.active3 = !this.active3;
  }
  activateRouterLink4() {
    for (let i = 0; i < 5; i++) {
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
    }
    this.active4 = !this.active4;
  }
  activateRouterLink5() {
    for (let i = 0; i < 5; i++) {
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
    }
    this.active5 = !this.active5;
  }

}
