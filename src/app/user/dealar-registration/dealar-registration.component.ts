import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {FormBuilder, FormControl,FormGroup, NgForm, Validators} from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import {Observable, observable} from "rxjs"
import { TranslateService } from '@ngx-translate/core';
import { CityDto } from 'src/app/models/settings/CityDto';
import {DealerDto} from 'src/app/models/users/DealerDto'

@Component({
  selector: 'app-dealar-registration',
  templateUrl: './dealar-registration.component.html',
  styleUrls: ['./dealar-registration.component.scss']
})
export class DealarRegistrationComponent implements OnInit {


  cityControl = new FormControl('', Validators.required);
  vatnumberControl=new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  public model: DealerDto = new DealerDto();
  public Cities: CityDto[] = [];
  public isLangAr: boolean = false;
  constructor( private route:Router, private httpService: HttpService, private translate: TranslateService) { }
 
  ngOnInit(): void {
    if (this.translate.currentLang == "ar") {
      this.isLangAr = true;
    }
    this.GetCities();
  
  }
  Save() {
    console.log(this.model);
    this.httpService.Post("app/dealer",this.model).subscribe(res=>{
      console.log(res);      
    });
  }

  GetCities() {
    this.httpService.Get("app/city").subscribe(res => {
      this.Cities = res.items as CityDto[];
    });
  }

}
