import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleConfigComponent } from './schedule-config/schedule-config.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';

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
import { HomeModule } from '../../home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleSettingComponent } from './schedule-setting.component';


const routes: Routes = [
  { path: '', component: ScheduleConfigComponent },
  { path: 'scheduleconfig', component: ScheduleConfigComponent },
  { path: 'workinghours', component: WorkingHoursComponent },
]

@NgModule({
  declarations: [
    ScheduleSettingComponent,
    ScheduleConfigComponent,
    WorkingHoursComponent
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
  ],
  exports:[ScheduleConfigComponent,WorkingHoursComponent]

})
export class ScheduleSettingModule { }
