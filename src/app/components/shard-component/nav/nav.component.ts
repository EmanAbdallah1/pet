import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../Loader/loader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
public isLangAr:boolean=false;
  constructor(public translate: TranslateService,  public loaderService: LoaderService) { }

  ngOnInit(): void {
    if(this.translate.currentLang=='ar'){
      this.isLangAr=true;
    }else{
      this.isLangAr=false;
    }
  }
ChangeLang(lang:string){
  localStorage.setItem('lang',lang);
  location.reload();
}
}
