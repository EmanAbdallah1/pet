import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-authorization-settings',
  templateUrl: './authorization-settings.component.html',
  styleUrls: ['./authorization-settings.component.scss']
})
export class AuthorizationSettingsComponent implements OnInit {

  navbarOpen = true;
  currDiv: string = 'role';
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
