import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RoleComponent } from './role/role.component';
import { AuthorizationSettingsComponent } from './authorization-settings.component';
import { BranchRoleComponent } from './branch-role/branch-role.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


const routes: Routes = [
  { path: '', component: RoleComponent },
  { path: 'role', component: RoleComponent },
  { path: 'brole', component: BranchRoleComponent },
 
]

@NgModule({
  declarations: [
AuthorizationSettingsComponent,
RoleComponent,
BranchRoleComponent,
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
    MatCheckboxModule,
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
export class authorizationSettingsModule { }
