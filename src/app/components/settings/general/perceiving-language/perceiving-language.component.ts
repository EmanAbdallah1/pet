import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-perceiving-language',
  templateUrl: './perceiving-language.component.html',
  styleUrls: ['./perceiving-language.component.scss']
})
export class PerceivingLanguageComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  currDiv: string = 'perMethod';
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
