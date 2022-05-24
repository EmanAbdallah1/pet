import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VMedCareFrontend';

  constructor(public translate: TranslateService,private spinner: NgxSpinnerService,
    @Inject(DOCUMENT) private document: Document) {
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('en');
    var lang=localStorage.getItem('lang');
    lang=lang??"en";
    translate.use(lang);
    this.changeCssFile(lang);
    //const browserLang = translate.getBrowserLang();
    //translate.use(browserLang.match(/ar|en/) ? browserLang : 'ar');

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
  
  }
  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === "ar" ? "arabicStyle.css":"englishStyle.css";
    if (existingLink) {
       existingLink.href = bundleName;
    } else {
       let newLink = this.document.createElement("link");
       newLink.rel = "stylesheet";
       newLink.type = "text/css";
       newLink.id = "langCss";
       newLink.href = bundleName;
       headTag.appendChild(newLink);
    }
    }
}
