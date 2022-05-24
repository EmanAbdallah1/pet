import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CompanyContactDto } from 'src/app/models/settings/CompanyContactDto';
import { CompanyDto } from 'src/app/models/settings/CompanyDto';
import { ContactTypeDto } from 'src/app/models/settings/ContactTypeDto';
import { VMedCarePagedAndSortedResultRequestDto } from 'src/app/models/Shared/VMedCarePagedAndSortedResultRequestDto';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styleUrls: ['./company-contact.component.scss']
})
export class CompanyContactComponent implements OnInit {
  public CompanyContacts: CompanyContactDto[] = [];
  public ContactTypes: ContactTypeDto[] = [];
  public Companies: CompanyDto[] = [];
  public Model: CompanyContactDto = new CompanyContactDto();
  public PagingModel: VMedCarePagedAndSortedResultRequestDto = new VMedCarePagedAndSortedResultRequestDto();
  public isLangAr: boolean = false;
  constructor(public httpService: HttpService, public translate: TranslateService) { }



  currDiv: string = 'companies';
  ngOnInit(): void {
    if (this.translate.currentLang == "ar") {
      this.isLangAr = true;
    }
    this.GetCompanyContacts();
    this.GetCompanies();
    this.GetContactTypes();
  }
  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  GetCompanyContacts() {
    this.httpService.Get(
      `app/Company-Contact?SkipCount=${this.PagingModel.SkipCount}&MaxResultCount=${this.PagingModel.MaxResultCount}&Sorting=${this.PagingModel.Sorting}&Search=${this.PagingModel.Search}`).subscribe(res => {
        this.PagingModel.totalCount = res.totalCount as number;
        this.PagingModel.PagesCount = Math.ceil(this.PagingModel.totalCount / 10);
        this.CompanyContacts = res.items as CompanyContactDto[];
      });
  }
  GetCompanies() {
    this.httpService.Get(
      `app/company`).subscribe(res => {
        this.Companies = res.items as CompanyDto[];
      });
  }
  GetContactTypes() {
    this.httpService.Get(
      `app/Contact-Type`).subscribe(res => {
        this.ContactTypes = res.items as ContactTypeDto[];
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
      this.GetCompanyContacts();
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  ShowCreate(divVal: string) {
    this.Model = new CompanyContactDto();
    this.currDiv = divVal;
  }
  ShowEdit(id: number, divVal: string) {
    this.httpService.Get("app/Company-Contact/" + id).subscribe(res => {
      this.Model = res as CompanyContactDto;
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
    this.httpService.Post("app/Company-Contact", this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.create-done"),//' ! تم الحفظ ',
        '',
        'success'
      );
      this.GetCompanyContacts();
      this.ShowDiv('companies');
    })
  }
  Edit() {
    this.httpService.Put("app/Company-Contact/" + this.Model.id, this.Model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.update-done"),//' ! تم التعديل ',
        '',
        'success'
      );
      this.GetCompanyContacts();
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
        this.httpService.Delete("app/Company-Contact/" + id).subscribe(res => {
          Swal.fire(
            this.translate.instant("shared.delete-done"),//' ! تم الحذف ',
            '',
            'success'
          )
          if(this.CompanyContacts.length == 1 && this.PagingModel.CurrentPage !=1)
          {
            this.PagingModel.CurrentPage -=1;
          }
          this.GetCompanyContacts();

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
