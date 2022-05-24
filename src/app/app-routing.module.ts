import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { EmployeeRegistrationComponent } from './user/employee-registration/employee-registration.component';
import { DealarRegistrationComponent } from './user/dealar-registration/dealar-registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { GeneralSettingComponent } from './components/settings/general/general-setting.component';
import { ScheduleSettingComponent } from './components/settings/schedule-setting/schedule-setting.component';
import { StockSettingComponent } from './components/settings/stock-setting/stock-setting.component';
import { AuthorizationSettingsComponent } from './components/settings/authorization-settings/authorization-settings.component';
import { ClientRegistrationComponent } from './user/client-registration/client-registration.component';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceSettingComponent } from './components/settings/service-setting/service-setting.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { VerficationCodeComponent } from './user/verfication-code/verfication-code.component';
import { RestPasswordComponent } from './user/rest-password/rest-password.component';
const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuard],data: {roles: []}},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'register-employee',component:EmployeeRegistrationComponent},
  {path:'register-dealer',component:DealarRegistrationComponent},
  {path:'register-client',component:ClientRegistrationComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'ver',component:VerficationCodeComponent},
  {path:'rest',component:RestPasswordComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'register-employee',component:EmployeeRegistrationComponent},
  // {path:'register-dealer',component:DealarRegistrationComponent},
  // {path:'register-client',component:ClientRegistrationComponent},
  // {path:'setting-auth',component:AuthorizationSettingsComponent},
  // {path:'setting-stock',component:StockSettingComponent},
  {path:'user',loadChildren:()=>import('src/app/user/user.module').then(m=>m.UserModule)},

  { path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
  {
    path: 'settings', component: GeneralSettingComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./components/settings/general/general-setting.module').then(m => m.GeneralSettingModule)  ,
        
      },
    ]
  },
  {
    path: 'Schedule-settings', component: ScheduleSettingComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./components/settings/schedule-setting/schedule-setting.module').then(m => m.ScheduleSettingModule)  ,
      },
    ]
  },
  {
    path: 'auth-settings', component: AuthorizationSettingsComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./components/settings/authorization-settings/authorization-settings.module').then(m => m.authorizationSettingsModule)  ,
      },
    ]
  },
  {
    path: 'stock-settings', component: StockSettingComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./components/settings/stock-setting/stock-setting.module').then(m => m.StockSettingModule)  ,
      },
    ]
  },  {
    path: 'service-settings', component: ServiceSettingComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./components/settings/service-setting/service-setting.module').then(m => m.ServiceSettingModule)  ,
      },
    ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule,  TranslateModule]
})
export class AppRoutingModule { }
