import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-setting',
  templateUrl: './general-setting.component.html',
  styleUrls: ['./general-setting.component.scss']
})
export class GeneralSettingComponent implements OnInit {

  navbarOpen = true;
  currDiv: string = 'companies';
    constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

}
