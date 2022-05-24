import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';// import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader} from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

import { HttpLoaderFactory } from 'src/app/app.module'
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatStepperModule } from '@angular/material/stepper';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { DealarRegistrationComponent } from './dealar-registration/dealar-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { HomeModule } from '../components/home/home.module';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { VerficationCodeComponent } from './verfication-code/verfication-code.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { RestPasswordComponent } from './rest-password/rest-password.component';


const routes:Routes=[

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'confirm-password',component:ConfirmPasswordComponent},
  {path:'client-register',component:ClientRegistrationComponent},
  {path:'dealer-register',component:DealarRegistrationComponent},
  {path:'employee-register',component:EmployeeRegistrationComponent},

]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ConfirmPasswordComponent,
    DealarRegistrationComponent,
    EmployeeRegistrationComponent,
    ClientRegistrationComponent,
    VerficationCodeComponent,
    RestPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    NgxOtpInputModule,
    HomeModule,
    TranslateModule.forChild({  
      loader: {  
          provide: TranslateLoader,  
          useFactory: HttpLoaderFactory,  
          deps: [HttpClient]  
      }  
  }) 
        
  ],
  exports:[LoginComponent,RegisterComponent,ForgetPasswordComponent,ConfirmPasswordComponent,    MatFormFieldModule
  ]
})
export class UserModule { }
