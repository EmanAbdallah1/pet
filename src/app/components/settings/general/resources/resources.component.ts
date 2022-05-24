import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';
import {ResourceTypeDto} from 'src/app/models/settings/ResourceTypeDto';
import {ResourceDto} from 'src/app/models/settings/ResourceDto';
import { VMedCarePagedAndSortedResultRequestDto } from 'src/app/models/Shared/VMedCarePagedAndSortedResultRequestDto';
import {HttpService} from 'src/app/services/http.service'
interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  isLinear = false;
  
  firstFormGroup: FormGroup=this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup: FormGroup=this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  public model: ResourceDto= new ResourceDto();
  public Resources:ResourceDto[]=[];
  public ResourceTypes: ResourceTypeDto[] = [];
  public PagingModel: VMedCarePagedAndSortedResultRequestDto = new VMedCarePagedAndSortedResultRequestDto();
  public isLangAr: boolean = false;
  constructor(private _formBuilder: FormBuilder,private viewportScroller: ViewportScroller,private httpService:HttpService, private translate: TranslateService) {}

 
  currDiv: string = 'resources';
  ngOnInit(): void {
    if (this.translate.currentLang == "ar") {
      this.isLangAr = true;
    }
    this.viewportScroller.scrollToPosition([0, 0]);
    this.GetResources();
    this.GetResourcesTypes();

  }
  GetResources() {
    this.httpService.Get(
      `app/resource?SkipCount=${this.PagingModel.SkipCount}&MaxResultCount=${this.PagingModel.MaxResultCount}&Sorting=${this.PagingModel.Sorting}&Search=${this.PagingModel.Search}`).subscribe(res => {
        this.PagingModel.totalCount = res.totalCount as number;
        this.PagingModel.PagesCount = Math.ceil(this.PagingModel.totalCount / 10);
        this.Resources = res.items as ResourceDto[];
        console.log(res);
      });
  }
  GetResourcesTypes()
  {
    this.httpService.Get("app/resource-type").subscribe(res=>
      {
        console.log(res);
        this.ResourceTypes= res.items as ResourceTypeDto[];
      })
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
      this.GetResources();
    }
  }
  counter(i: number) {
    return new Array(i);
  }
  ShowCreate(divVal: string) {
    this.model = new ResourceDto();
    this.currDiv = divVal;
    this.form.add='1'

  }
  ShowEdit(id: number, divVal: string) {
    this.httpService.Get("app/resource/" + id).subscribe(res => {
      this.model = res as ResourceDto;
      console.log(this.model);

      this.currDiv = divVal;
    });
  }
  form = {
    add: '0',
  };
  Save() {
    if (this.model.id > 0) {
      this.Edit();

    } else {
      this.Create();
    }
  }
  Create() {
    this.httpService.Post("app/resource", this.model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.create-done"),//' ! تم الحفظ ',
        '',
        'success'
      );
      this.GetResources();
      this.ShowDiv('resources');
    })
  }
  Edit() {
    this.httpService.Put("app/resource/" + this.model.id, this.model).subscribe(res => {
      Swal.fire(
        this.translate.instant("shared.update-done"),//' ! تم التعديل ',
        '',
        'success'
      );
      this.GetResources();
      this.ShowDiv('resources');
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
        this.httpService.Delete("app/resource/" + id).subscribe(res => {
          Swal.fire(
            this.translate.instant("shared.delete-done"),//' ! تم الحذف ',
            '',
            'success'
          )
          if(this.ResourceTypes.length == 1 && this.PagingModel.CurrentPage !=1)
          {
            this.PagingModel.CurrentPage -=1;
          }
          this.GetResources();

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
