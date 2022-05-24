import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-branch-role',
  templateUrl: './branch-role.component.html',
  styleUrls: ['./branch-role.component.scss']
})


export class BranchRoleComponent implements OnInit {
  selectedValue:any
      currDiv: string = 'brole';
  showData=true;
  myModel=true
   
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
  players = [
    "Omar Store",
    "Riydah",
    "Raafat Store",
    "Kumar Sangakkara",
    "Jacques Kallis",
    "Hashim Amla",
    "Mahela Jayawardene",
    "Brian Lara",
    "Rahul Dravid",
    "AB de Villiers"
  ]
  selected = "----"
  
  update(e:any){
    this.selected = e.target.value
  }

}
