import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.ApiUrl;
  }

  Get(api: string): Observable<any> {
    return this.http.get<any>(this.url + api, this.GetRequestHeader()).pipe(
      map((data) => {
        return data;
      })
    );
  }

  Post(api: string, model: any, requestHeaderOption: any = null): Observable<any> {
    var requestHeader = requestHeaderOption ?? this.GetRequestHeader();
    return this.http.post(this.url + api, model, requestHeader).pipe(
      map((data) => {
        return data;
      })
    );
  }

  Put(api: string, model: any, requestHeaderOption: any = null): Observable<any> {
    var requestHeader = requestHeaderOption ?? this.GetRequestHeader();
    return this.http.put(this.url + api, model, requestHeader).pipe(
      map((data) => {
        return data;
      })
    );
  }

  Delete(api: string): Observable<any> {
    return this.http.delete(this.url + api, this.GetRequestHeader()).pipe(
      map((data) => {
        return data;
      })
    );
  }

  GetRequestHeader() {
    let token = localStorage.getItem('access_token');
    this.url = environment.ApiUrl;
    let headers = new HttpHeaders();
    headers = headers.append('accept-language', localStorage.getItem("lang") ?? "en");
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'bearer ' + token);
    let options = {
      'headers': headers
    }

    return options;
  }

}
