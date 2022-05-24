import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mail-setting',
  templateUrl: './mail-setting.component.html',
  styleUrls: ['./mail-setting.component.scss']
})
export class MailSettingComponent implements OnInit {


  constructor() { }

  currDiv: string = 'mail';
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
