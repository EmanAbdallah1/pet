import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-salutation',
  templateUrl: './salutation.component.html',
  styleUrls: ['./salutation.component.scss']
})
export class SalutationComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}
  currDiv: string = 'salutation';
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
