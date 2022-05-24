import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrancheShelvesComponent } from './branche-shelves/branche-shelves.component';
import { CategoriesComponent } from './categories/categories.component';
import { CurrencyComponent } from './currency/currency.component';
import { GenericsComponent } from './generics/generics.component';
import { MailSettingComponent } from './mail-setting/mail-setting.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { TradesComponent } from './trades/trades.component';
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
import { StockSettingComponent } from './stock-setting.component';


const routes: Routes = [
  { path: '', component: BrancheShelvesComponent },

  { path: 'brancheShelves', component: BrancheShelvesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'generics', component: GenericsComponent },
  { path: 'mailSetting', component: MailSettingComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'trades', component: TradesComponent },
]

@NgModule({
  declarations: [
    StockSettingComponent,
    BrancheShelvesComponent,
    CategoriesComponent,
    CurrencyComponent,
    GenericsComponent,
    MailSettingComponent,
    SuppliersComponent,
    TradesComponent,
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
export class StockSettingModule { }
