import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DiscountDto } from 'src/app/models/billings/DiscountDto';
import { CityDto } from 'src/app/models/settings/CityDto';
import { ClientCategoryDto } from 'src/app/models/settings/ClientCategoryDto';
import { CountryDto } from 'src/app/models/settings/CountryDto';
import { DistrictDto } from 'src/app/models/settings/DistrictDto';
import { GenderDto } from 'src/app/models/settings/GenderDto';
import { IdTypeDto } from 'src/app/models/settings/IdTypeDto';
import { PerceivingMethodDto } from 'src/app/models/settings/PerceivingMethodDto';
import { PreferredLanguageDto } from 'src/app/models/settings/PreferredLanguageDto';
import { SalutationDto } from 'src/app/models/settings/SalutationDto';
import { ClientDto } from 'src/app/models/users/ClientDto';
import { EmployeeDto } from 'src/app/models/users/EmployeeDto';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];
  isLinear = false;

  firstFormGroup: FormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup: FormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  public model: ClientDto = new ClientDto();
  public Countries: CountryDto[] = [];
  public Cities: CityDto[] = [];
  public Districts: DistrictDto[] = [];
  public IdTypes: IdTypeDto[] = [];
  public ClientCategories: ClientCategoryDto[] = [];
  public Genders: GenderDto[] = [];
  public Salutations: SalutationDto[] = [];
  public PreferredLanguages: PreferredLanguageDto[] = [];
  public PerceivingMethods: PerceivingMethodDto[] = [];
  public Discounts: DiscountDto[] = [];
  public Vets:EmployeeDto[]=[];
  public isLangAr: boolean = false;
  constructor(private _formBuilder: FormBuilder, private httpService: HttpService, private translate: TranslateService) { }

  ngOnInit() {
    if (this.translate.currentLang == "ar") {
      this.isLangAr = true;
    }
    this.GetCountries();
    this.GetCities();
    this.GetIdTypes();
    this.GetGenders();
    this.GetClientCategories();
    this.GetPerceivingMethods();
    this.GetPreferredLanguages();
    this.GetDiscounts();
    this.GetVets();
    if (this.model.cityId && this.model.cityId > 0) {
      this.GetDistricts(this.model.cityId);
    }
    if (this.model.genderId && this.model.genderId > 0) {
      this.GetSalutaion(this.model.genderId);
    }
  }

  Save() {
    this.httpService.Post("app/client",this.model).subscribe(res=>{
      Swal.fire(
        this.translate.instant("shared.create-done"),//' ! تم الحفظ ',
        '',
        'success'
      ) 
        });
  }
  GetCountries() {
    this.httpService.Get("app/country").subscribe(res => {
      this.Countries = res.items as CountryDto[];
    });
  }
  GetCities() {
    this.httpService.Get("app/city").subscribe(res => {
      this.Cities = res.items as CityDto[];
    });
  }
  GetDistricts(cityId: number) {
    if (!isNaN(cityId)) {
      this.httpService.Get("app/district/GetByCityId?cityId=" + cityId).subscribe(res => {
        this.Districts = res.items as DistrictDto[];
      });
    }
    else {
      this.Districts = [];
    }
    
  }
  GetIdTypes() {
    this.httpService.Get("app/id-Type").subscribe(res => {
      this.IdTypes = res.items as IdTypeDto[];
    });
  }
  GetClientCategories() {
    this.httpService.Get("app/Client-Category").subscribe(res => {
      this.ClientCategories = res.items as ClientCategoryDto[];
    });
  }
  GetGenders() {
    this.httpService.Get("app/gender/GetGendersByTypeName?name=Human").subscribe(res => {
      this.Genders = res.items as GenderDto[];
    });
  }
  GetSalutaion(genderId: number) {
    if (!isNaN(genderId)) {
      this.httpService.Get("app/salutation/GetByGenderId?genderId=" + genderId).subscribe(res => {
        this.Salutations = res.items as SalutationDto[];
      });
    }
    else {
      this.Salutations = [];
    }
  }
  GetPreferredLanguages() {
    this.httpService.Get("app/Preferred-Language").subscribe(res => {
      this.PreferredLanguages = res.items as PreferredLanguageDto[];
    });
  }
  GetPerceivingMethods() {
    this.httpService.Get("app/Perceiving-Method").subscribe(res => {
      this.PerceivingMethods = res.items as PerceivingMethodDto[];
    });
  }
  GetDiscounts() {
    this.httpService.Get("app/Discount").subscribe(res => {
      this.Discounts = res.items as DiscountDto[];
    });
  }
  GetVets() {
    this.httpService.Get("app/employee/GetByPositionName?name=Vets").subscribe(res => {
      this.Vets = res.items as EmployeeDto[];
    });
  }
}
