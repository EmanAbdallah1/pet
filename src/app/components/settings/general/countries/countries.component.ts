import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ViewportScroller } from '@angular/common';
import { HttpService } from 'src/app/services/http.service';
import { CountryDto } from 'src/app/models/settings/CountryDto';
import { VMedCarePagedAndSortedResultRequestDto } from 'src/app/models/Shared/VMedCarePagedAndSortedResultRequestDto';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  public Countries: CountryDto[] = [];
  public Model: CountryDto = new CountryDto();
  public PagingModel: VMedCarePagedAndSortedResultRequestDto = new VMedCarePagedAndSortedResultRequestDto();
  constructor(private viewportScroller: ViewportScroller, public httpService: HttpService,public translate: TranslateService) { }


  currDiv: string = 'countries';
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.GetCountries();
  }

  GetCountries() {
    this.httpService.Get(
      `app/country?SkipCount=${this.PagingModel.SkipCount}&MaxResultCount=${this.PagingModel.MaxResultCount}&Sorting=${this.PagingModel.Sorting}&Search=${this.PagingModel.Search}`).subscribe(res => {
        this.PagingModel.totalCount = res.totalCount as number;
        this.PagingModel.PagesCount = Math.ceil(this.PagingModel.totalCount / 10);
        this.Countries = res.items as CountryDto[];
      });
  }

  Paging(pageNumber: number) {
    if (!((pageNumber == -1 && this.PagingModel.CurrentPage == 1) ||
      (pageNumber == -2 && this.PagingModel.CurrentPage == this.PagingModel.PagesCount))) {

      if (pageNumber == -1) {
        this.PagingModel.CurrentPage -= 1;
      } else if (pageNumber == -2) {
        this.PagingModel.CurrentPage += 1;
      } else {
        this.PagingModel.CurrentPage = pageNumber;
      }
      this.PagingModel.MaxResultCount = 10;
      this.PagingModel.SkipCount = (this.PagingModel.CurrentPage - 1) * 10;
      this.GetCountries();
    }
  }

  counter(i: number) {
    return new Array(i);
  }
  form = {
    add: '0',
  };

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
    this.form.add='0'
  }
  ShowCreate(divVal: string) {
    this.Model = new CountryDto();
    this.currDiv = divVal;
    this.form.add='1'
  }
  ShowEdit(id: number, divVal: string) {
    this.httpService.Get("app/country/" + id).subscribe(res => {
      this.Model = res as CountryDto;
      console.log(this.Model);

      this.currDiv = divVal;
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
    this.httpService.Post("app/country", this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.create-done"),//' ! تم الحفظ ',
        '',
        'success'
      );
      this.GetCountries();
      this.ShowDiv('countries');
    })
  }
  Edit() {
    this.httpService.Put("app/country/" + this.Model.id, this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.update-done"),//' ! تم التعديل ',
        '',
        'success'
      );
      this.GetCountries();
      this.ShowDiv('countries');
    })
  }
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
        this.httpService.Delete("app/country/" + id).subscribe(res => {
          Swal.fire(
            this.translate.instant("shared.delete-done"),//' ! تم الحذف ',
            '',
            'success'
          )
          if(this.Countries.length == 1 && this.PagingModel.CurrentPage !=1)
          {
            this.PagingModel.CurrentPage -=1;
          }
          this.GetCountries();

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

}
