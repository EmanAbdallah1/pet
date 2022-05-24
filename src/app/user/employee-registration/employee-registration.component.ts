import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from 'src/app/services/http.service';
import { GenderDto } from 'src/app/models/settings/GenderDto';
import { IdTypeDto } from 'src/app/models/settings/IdTypeDto';
import { SalutationDto } from 'src/app/models/settings/SalutationDto';
import {JopTypeDto} from 'src/app/models/settings/JopTypeDto';
import {PositionDto} from 'src/app/models/settings/PositionDto';
import {EmployeeDto} from 'src/app/models/users/EmployeeDto';
interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  showDiv = {
    previous : false,
    current : true,
    display:false,
    edit:true
  }
  public model: EmployeeDto = new EmployeeDto();
  public Positions: PositionDto[] = [];
  public Salutations: SalutationDto[] = [];
  public JopTypes:JopTypeDto[]=[];
  public IdTypes: IdTypeDto[] = [];
  public Genders: GenderDto[] = [];
  public isLangAr: boolean = false;
  constructor(private _formBuilder: FormBuilder, private httpService: HttpService, private translate: TranslateService) { }

  ngOnInit(): void {
    if (this.translate.currentLang == "ar") {
      this.isLangAr = true;
    }
    this.GetGenders();
    this.GetIdTypes();
    this.GetJopType();
 
  }
  Save() {
    this.httpService.Post("app/employee",this.model).subscribe(res=>{
      console.log(res);      
    });
  }
  GetJopType()
  {
    this.httpService.Get("app/job-type").subscribe(res=>
      {
        console.log(res);
        this.JopTypes= res.items as JopTypeDto[];
      })
  }
  GetPositions(jopTypeId:number)
  {
    if (!isNaN(jopTypeId))
    {
    this.httpService.Get("app/position/GetPositionByJobTypeId?jobTypeId="+jopTypeId).subscribe(res =>
      {
        console.log(res);
        this.Positions=res.items as PositionDto[];
      })
    }
  }
  GetIdTypes() {
    this.httpService.Get("app/id-Type").subscribe(res => {
      console.log(res);
      this.IdTypes = res.items as IdTypeDto[];
    });
  }
  GetGenders() {
    this.httpService.Get("app/gender/GetGendersByTypeName?name=Human").subscribe(res => {
      console.log(res);
      this.Genders = res.items as GenderDto[];
    });
  }
  GetSalutaion(genderId: number) {
    if (!isNaN(genderId)) {
      this.httpService.Get("app/salutation/GetByGenderId?genderId=" + genderId).subscribe(res => {
        console.log(res);
        this.Salutations = res.items as SalutationDto[];
      });
    }
    else {
      this.Salutations = [];
    }
  }
}
