import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { ViewportScroller } from '@angular/common';
import{PaymentMthodDto} from 'src/app/models/settings/PaymentMethodDto';
import{HttpService} from 'src/app/services/http.service';
import { TranslateService } from '@ngx-translate/core';
import { VMedCarePagedAndSortedResultRequestDto } from 'src/app/models/Shared/VMedCarePagedAndSortedResultRequestDto';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  // animalControl = new FormControl('', Validators.required);
  // selectFormControl = new FormControl('', Validators.required);
  // isLinear = false;
  
  // firstFormGroup: FormGroup=this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup: FormGroup=this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });

  public Model: PaymentMthodDto = new PaymentMthodDto();
  public PaymentMthods: PaymentMthodDto[] = [];
  public PagingModel: VMedCarePagedAndSortedResultRequestDto = new VMedCarePagedAndSortedResultRequestDto();
  public isLangAr: boolean = false;
  constructor(private _formBuilder: FormBuilder,private viewportScroller: ViewportScroller,private httpService:HttpService,public translate: TranslateService) {}
  
  currDiv: string = 'pay';
  ngOnInit(): void {
    if (this.translate.currentLang == "ar") {
      this.isLangAr = true;
    }
    this.viewportScroller.scrollToPosition([0, 0]);
    this.GetPaymentMethods();
  }

  GetPaymentMethods() {
    this.httpService.Get(
      `app/payment-method?SkipCount=${this.PagingModel.SkipCount}&MaxResultCount=${this.PagingModel.MaxResultCount}&Sorting=${this.PagingModel.Sorting}&Search=${this.PagingModel.Search}`).subscribe(res => {
        this.PagingModel.totalCount = res.totalCount as number;
        this.PagingModel.PagesCount = Math.ceil(this.PagingModel.totalCount / 10);
        this.PaymentMthods = res.items as PaymentMthodDto[];
      });
  }
  Paging(pageNumber: number) {
    if (!((pageNumber == -1 && this.PagingModel.CurrentPage == 1) ||
    (pageNumber == 1&& this.PagingModel.CurrentPage == this.PagingModel.PagesCount))) {

    if (pageNumber == -1) {
      this.PagingModel.CurrentPage -= 1;
    } else if (pageNumber == 1) {
      this.PagingModel.CurrentPage += 1;
    } else {
      this.PagingModel.CurrentPage = pageNumber;
    }
    this.PagingModel.MaxResultCount = 10;
    this.PagingModel.SkipCount = (this.PagingModel.CurrentPage - 1) * 10;
      this.GetPaymentMethods();
    }
  }
  counter(i: number) {
    return new Array(i);
  }

  ShowCreate(divVal: string) {
    this.Model = new PaymentMthodDto();
    this.currDiv = divVal;
    this.form.add='1';

  }
  ShowEdit(id: number, divVal: string) {
    this.httpService.Get("app/payment-method/" + id).subscribe(res => {
      this.Model = res as PaymentMthodDto;
      console.log(this.Model);
      this.currDiv = divVal;
      this.form.add='0';
    });
  }
  Save() {
    if (this.Model.id > 0) {
      this.Edit();

    } else {
      this.Create();
    }
  }
  Create() {
    this.httpService.Post("app/payment-method", this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.create-done"),//' ! تم الحفظ ',
        '',
        'success'
      );
      this.GetPaymentMethods();
      this.ShowDiv('pay');
    })
  }
  Edit() {
    this.httpService.Put("app/payment-method/" + this.Model.id, this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.update-done"),//' ! تم التعديل ',
        '',
        'success'
      );
      this.GetPaymentMethods();
      this.ShowDiv('pay');
    })
  }
  form = {
    add: '0',
  };
  Delete(id: number) {
    Swal.fire({
      title: this.translate.instant("shared.delete-alert-message"),//'هل تريد الحذف ؟',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: this.translate.instant("shared.ok"),//'بالتاكيد',
      cancelButtonText: this.translate.instant("shared.cancel")//'الغاء'
    }).then((result) => {
      if (result.value) {
        this.httpService.Delete("app/payment-method/" + id).subscribe(res => {
          Swal.fire(
            this.translate.instant("shared.delete-done"),//' ! تم الحذف ',
            '',
            'success'
          )
          if(this.PaymentMthods.length == 1 && this.PagingModel.CurrentPage !=1)
          {
            this.PagingModel.CurrentPage -=1;
          }
          this.GetPaymentMethods();

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          this.translate.instant("shared.delete-cancel-message"),//' تم الغاء الحذف ',
          '',
          'error'
        )
      }
    })
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
