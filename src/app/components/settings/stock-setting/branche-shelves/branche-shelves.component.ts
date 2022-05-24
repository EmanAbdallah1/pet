import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-branche-shelves',
  templateUrl: './branche-shelves.component.html',
  styleUrls: ['./branche-shelves.component.scss']
})
export class BrancheShelvesComponent implements OnInit {

 
  constructor(private viewportScroller: ViewportScroller) {}

 
  currDiv: string = 'shelf';
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
