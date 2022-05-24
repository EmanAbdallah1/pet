import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-service-setting',
  templateUrl: './service-setting.component.html',
  styleUrls: ['./service-setting.component.scss']
})
export class ServiceSettingComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private _formBuilder: FormBuilder) {}

 
 
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  isLinear = false;
  
  firstFormGroup: FormGroup=this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup: FormGroup=this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  navbarOpen = true;
  currDiv: string = 'config';
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit(): void {
  }
  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
  alertConfirmation(){
    Swal.fire({
      title: 'هل تريد الحذف ؟',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بالتاكيد',
      cancelButtonText: 'الغاء'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          ' ! تم الحذف ',
          '',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          ' تم الغاء الحذف ',
          '',
          'error'
        )
      }
    })
  }  


}
