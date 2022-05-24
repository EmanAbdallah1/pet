import { NgModule,CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule} from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FileUploadModule } from 'ng2-file-upload';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxSpinnerModule } from 'ngx-spinner';


// import { AuthorizationSettingsComponent } from './authorization-settings/authorization-settings.component';
// import { RoleComponent } from './authorization-settings/role/role.component';
// import { StockSettingComponent } from './stock-setting/stock-setting.component';
// import { BrancheShelvesComponent } from './stock-setting/branche-shelves/branche-shelves.component';
// import { CurrencyComponent } from './stock-setting/currency/currency.component';
// import { CategoriesComponent } from './stock-setting/categories/categories.component';
// import { GenericsComponent } from './stock-setting/generics/generics.component';
// import { TradesComponent } from './stock-setting/trades/trades.component';
// import { SuppliersComponent } from './stock-setting/suppliers/suppliers.component';
// import { MailSettingComponent } from './stock-setting/mail-setting/mail-setting.component';
// import { ScheduleSettingsComponent } from './schedule-settings/schedule-settings.component';
// import { ScheduleConfigComponent } from './schedule-settings/schedule-config/schedule-config.component';
// import { WorkingHoursComponent } from './schedule-settings/working-hours/working-hours.component';

export function HttpLoaderFactory(httpClient: HttpClient) {  
  return new TranslateHttpLoader(httpClient);  
} 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatStepperModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FileUploadModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    HttpClientModule ,
    MatProgressBarModule,
    MatNativeDateModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({  
      loader: {  
          provide: TranslateLoader,  
          useFactory: HttpLoaderFactory,  
          deps: [HttpClient]  
      }  
  })  
  ],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
