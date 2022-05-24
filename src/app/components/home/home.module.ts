import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { AppRoutingModule } from '../../app-routing.module';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule} from '@angular/material/menu';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IconNavComponent } from '../shard-component/icon-nav/icon-nav.component';
import { NavComponent } from '../shard-component/nav/nav.component';
import { SidebarComponent } from '../shard-component/sidebar/sidebar.component';

const routes:Routes=[
]
@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    SidebarComponent,
    IconNavComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forChild(routes),
    MatMenuModule,    TranslateModule.forChild({  
      loader: {  
          provide: TranslateLoader,  
          useFactory: HttpLoaderFactory,  
          deps: [HttpClient]  
      }  
  }) ,
  ],
  exports:[ 
    MatFormFieldModule,  NavComponent,
    SidebarComponent,
    IconNavComponent]
})
export class HomeModule { }
