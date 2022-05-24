import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CompanyDto } from 'src/app/models/settings/CompanyDto';
import { VMedCarePagedAndSortedResultRequestDto } from 'src/app/models/Shared/VMedCarePagedAndSortedResultRequestDto';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  public ApiUrl:string="";
  public Companies: CompanyDto[] = [];
  public Model: CompanyDto = new CompanyDto();
  public PagingModel: VMedCarePagedAndSortedResultRequestDto = new VMedCarePagedAndSortedResultRequestDto();
  constructor(public httpService: HttpService, public translate: TranslateService) { }
  currDiv: string = 'companies';
  ngOnInit(): void {
    this.ApiUrl=environment.ApiBaseUrl;
    this.GetCompanies();
  }

  GetCompanies() {
    this.httpService.Get(
      `app/Company?SkipCount=${this.PagingModel.SkipCount}&MaxResultCount=${this.PagingModel.MaxResultCount}&Sorting=${this.PagingModel.Sorting}&Search=${this.PagingModel.Search}`).subscribe(res => {
        this.PagingModel.totalCount = res.totalCount as number;
        this.PagingModel.PagesCount = Math.ceil(this.PagingModel.totalCount / 10);
        this.Companies = res.items as CompanyDto[];
      });
  }
  ShowDiv(divVal: string) {
    this.currDiv = divVal;
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
      this.GetCompanies();
    }
  }

  counter(i: number) {
    return new Array(i);
  }
  ShowCreate(divVal: string) {
    this.Model = new CompanyDto();
    this.currDiv = divVal;
  }
  ShowEdit(id: number, divVal: string) {
    this.httpService.Get("app/company/" + id).subscribe(res => {
      this.Model = res as CompanyDto;
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
    this.httpService.Post("app/company", this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.create-done"),//' ! تم الحفظ ',
        '',
        'success'
      );
      this.GetCompanies();
      this.ShowDiv('companies');
    })
  }
  Edit() {
    this.httpService.Put("app/company/" + this.Model.id, this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.update-done"),//' ! تم التعديل ',
        '',
        'success'
      );
      this.GetCompanies();
      this.ShowDiv('companies');
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
        this.httpService.Delete("app/company/" + id).subscribe(res => {
          Swal.fire(
            this.translate.instant("shared.delete-done"),//' ! تم الحذف ',
            '',
            'success'
          )
          if (this.Companies.length == 1 && this.PagingModel.CurrentPage != 1) {
            this.PagingModel.CurrentPage -= 1;
          }
          this.GetCompanies();

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

  handleUpload(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.Model.fileName = file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.Model.file = reader.result;
      };
    }
  }
}
