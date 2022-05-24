import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ViewportScroller } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from 'src/app/services/http.service';
import { CountryDto } from 'src/app/models/settings/CountryDto';
import { VMedCarePagedAndSortedResultRequestDto } from 'src/app/models/Shared/VMedCarePagedAndSortedResultRequestDto';
import { CityDto } from 'src/app/models/settings/CityDto';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  public Cities: CityDto[] = [];
  public Countries: CountryDto[] = [];
  public Model: CityDto = new CityDto();
  public PagingModel: VMedCarePagedAndSortedResultRequestDto = new VMedCarePagedAndSortedResultRequestDto();
  public isLangAr: boolean = false;
  constructor(private viewportScroller: ViewportScroller, public httpService: HttpService,public translate: TranslateService) {}

 
  currDiv: string = 'cities';
  ngOnInit(): void {
    if (this.translate.currentLang == "ar") {
      this.isLangAr = true;
    }
    this.viewportScroller.scrollToPosition([0, 0]);
    this.GetCities();
    this.GetCountries();
  }
  ShowDiv(divVal: string) {
    this.currDiv = divVal;
    this.form.add='0'

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
  GetCities() {
    this.httpService.Get(
      `app/city?SkipCount=${this.PagingModel.SkipCount}&MaxResultCount=${this.PagingModel.MaxResultCount}&Sorting=${this.PagingModel.Sorting}&Search=${this.PagingModel.Search}`).subscribe(res => {
        this.PagingModel.totalCount = res.totalCount as number;
        this.PagingModel.PagesCount = Math.ceil(this.PagingModel.totalCount / 10);
        this.Cities = res.items as CityDto[];
      });
  }
  GetCountries() {
    this.httpService.Get("app/country").subscribe(res => {
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
      this.GetCities();
    }
  }
  counter(i: number) {
    return new Array(i);
  }

  ShowCreate(divVal: string) {
    this.Model = new CityDto();
    this.currDiv = divVal;
    this.form.add='1'

  }
  ShowEdit(id: number, divVal: string) {
    this.httpService.Get("app/city/" + id).subscribe(res => {
      this.Model = res as CityDto;
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
    this.httpService.Post("app/city", this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.create-done"),//' ! تم الحفظ ',
        '',
        'success'
      );
      this.GetCities();
      this.ShowDiv('cities');
    })
  }
  Edit() {
    this.httpService.Put("app/city/" + this.Model.id, this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.update-done"),//' ! تم التعديل ',
        '',
        'success'
      );
      this.GetCities();
      this.ShowDiv('cities');
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
        this.httpService.Delete("app/city/" + id).subscribe(res => {
          Swal.fire(
            this.translate.instant("shared.delete-done"),//' ! تم الحذف ',
            '',
            'success'
          )
          if(this.Countries.length == 1 && this.PagingModel.CurrentPage !=1)
          {
            this.PagingModel.CurrentPage -=1;
          }
          this.GetCities();

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
