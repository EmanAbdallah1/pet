import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { ViewportScroller } from '@angular/common';

interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-loylaty',
  templateUrl: './loylaty.component.html',
  styleUrls: ['./loylaty.component.scss']
})
export class LoylatyComponent implements OnInit {

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

  constructor(private _formBuilder: FormBuilder,private viewportScroller: ViewportScroller) {}

 
  currDiv: string = 'loyal';
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);

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
