import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSettingComponent } from './general-setting.component';
import { CompanyContactComponent } from './company-contact/company-contact.component';
import { CompaniesComponent } from './companies/companies.component';
import { BranchesComponent } from './branches/branches.component';
import { BranchContactComponent } from './branch-contact/branch-contact.component';
import { BanksComponent } from './banks/banks.component';
import { LicensesComponent } from './licenses/licenses.component';
import { ClientCategoryComponent } from './client-category/client-category.component';
import { GendersComponent } from './genders/genders.component';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { DistrictsComponent } from './districts/districts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadModule } from 'ng2-file-upload';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HomeModule } from 'src/app/components/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { IdTypesComponent } from './id-types/id-types.component';
import { ColorTypesComponent } from './color-types/color-types.component';
import { SalutationComponent } from './salutation/salutation.component';
import { BreedTypeComponent } from './breed-type/breed-type.component';
import { SpeciesTypesComponent } from './species-types/species-types.component';
import { CautionComponent } from './caution/caution.component';
import { CautionColorsComponent } from './caution-colors/caution-colors.component';
import { LanguageComponent } from './language/language.component';
import { PerceivingLanguageComponent } from './perceiving-language/perceiving-language.component';
import { GroomingComponent } from './grooming/grooming.component';
import { PayComponent } from './pay/pay.component';
import { LoylatyComponent } from './loylaty/loylaty.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'appointments', component: AppointmentComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'branchcontacts', component: BranchContactComponent },
  { path: 'branchs', component: BranchesComponent },
  { path: 'breedtypes', component: BreedTypeComponent },
  { path: 'cautions', component: CautionComponent },
  { path: 'cautioncolors', component: CautionColorsComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'clientcategories', component: ClientCategoryComponent },
  { path: 'colortypes', component: ColorTypesComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'companycontracts', component: CompanyContactComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'districts', component: DistrictsComponent },
  { path: 'genders', component: GendersComponent },
  { path: 'groomings', component: GroomingComponent },
  { path: 'idtypes', component: IdTypesComponent },
  { path: 'languages', component: LanguageComponent },
  { path: 'licenses', component: LicensesComponent },
  { path: 'loylaties', component: LoylatyComponent },
  { path: 'paies', component: PayComponent },
  { path: 'perceivingmethods', component: PerceivingLanguageComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'salutations', component: SalutationComponent },
  { path: 'speciestypes', component: SpeciesTypesComponent },
]

@NgModule({
  declarations: [
    GeneralSettingComponent,
    CompanyContactComponent,
    CompaniesComponent,
    BranchesComponent,
    BranchContactComponent,
    BanksComponent,
    LicensesComponent,
    ClientCategoryComponent,
    GendersComponent,
    CountriesComponent,
    CitiesComponent,
    DistrictsComponent,
    AppointmentComponent,
    IdTypesComponent,
    ColorTypesComponent,
    SalutationComponent,
    BreedTypeComponent,
    SpeciesTypesComponent,
    CautionComponent,
    CautionColorsComponent,
    LanguageComponent,
    PerceivingLanguageComponent,
    GroomingComponent,
    PayComponent,
    LoylatyComponent,
    ResourcesComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatMenuModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FileUploadModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    TranslateModule.forChild({  
      loader: {  
          provide: TranslateLoader,  
          useFactory: HttpLoaderFactory,  
          deps: [HttpClient]  
      }  
  }) ,
  HomeModule
  ]
})
export class GeneralSettingModule { }
