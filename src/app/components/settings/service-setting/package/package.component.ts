import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { Idata, Irole } from './Interfaces/data';
import { trigger, transition, style, animate, query, stagger, state, animateChild } from '@angular/animations';
interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('easeInOut', [
      transition('void => *', [
          style({
              opacity: 0
          }),
          animate("500ms ease-in", style({
              opacity: 1
          }))
      ]),
      transition('* => void', [
          style({
              opacity: 1
          }),
          animate("500ms ease-in", style({
              opacity: 0
          }))
        ])
      ])
  ],
  styleUrls: ['./package.component.scss'],

  
})

export class PackageComponent implements OnInit {
  showDiv = {
    previous : false,
    current : false,
    next : false
  }


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
  isDisabled = true;
  triggerSomeEvent() {
      this.isDisabled = !this.isDisabled;
      return;
  }

toggle=0;
  data: Idata[] = [];  
  role:Irole[]=[];
  currDiv: string = 'package';
  ngOnInit(): void {
    
    this.role=[
      {
        role1:"Species: horse and Kamal        ",
        role2:"Breed: Horse & camel        ",
        role3:"Gender: Male Intact        ",
        role4:"Pet Size: Meduim        ",
        role5:"Resource Type: Laboratory        ",
        role6:"Visit Type: Visit        ",
        role7:"Service Payment Type: Before Checkup        ",
      }
    ]
    this.data=[
      {
        name:"SDS",
        nature:"	Procedure",
      }
    ]
  }
  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
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
