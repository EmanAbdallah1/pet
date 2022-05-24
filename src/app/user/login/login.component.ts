import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  rememberme: boolean = false;
  constructor(public router: Router, private route: ActivatedRoute, private httpService: HttpService, private http: HttpClient) { }

  ngOnInit(): void {
  }


  login() {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = {
      'headers': headers
    };

    const body = new HttpParams()
      .set('client_id', environment.AuthClientId)
      .set('client_secret', environment.AuthClientSecret)
      .set('grant_type', environment.AuthGrantType)
      .set('username', this.username)
      .set('password', this.password);

    this.http.post<any>(environment.ApiBaseUrl + "connect/token", body.toString(), options).subscribe(res => {
      localStorage.setItem("access_token", res.access_token);
      console.log(res)
      this.GetUserSetting();
    }, err => console.log(err));
  }
  GetUserSetting() {
    this.httpService.Get("abp/application-configuration").subscribe(res => {
      localStorage.setItem("UserId", res.currentUser.id);
      localStorage.setItem("UserName", res.currentUser.userName);
      localStorage.setItem("UserFName", res.currentUser.name);
      localStorage.setItem("UserEmail", res.currentUser.email);
      localStorage.setItem("UserRoles", JSON.stringify(res.currentUser.roles));

      let permisions: any[] = [];
      Object.keys(res.auth.grantedPolicies).map(function (key) {
        permisions.push(key);
      });
      localStorage.setItem("UserPermisions", JSON.stringify(permisions));
      this.route.queryParams.subscribe(params => {
        if(params['returnUrl'])
        {
          console.log(params['returnUrl']);
          
          this.router.navigate([params['returnUrl']]);
        }else{
          this.router.navigate(['/home']);
        }
      });

    });

  }

}
