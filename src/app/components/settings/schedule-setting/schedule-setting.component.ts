import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-setting',
  templateUrl: './schedule-setting.component.html',
  styleUrls: ['./schedule-setting.component.scss']
})
export class ScheduleSettingComponent implements OnInit {

  navbarOpen = true;
  currDiv: string = 'config';
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
