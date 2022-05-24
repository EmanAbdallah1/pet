import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-setting',
  templateUrl: './stock-setting.component.html',
  styleUrls: ['./stock-setting.component.scss']
})
export class StockSettingComponent implements OnInit {


  navbarOpen = true;
  currDiv: string = 'shelf';
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
