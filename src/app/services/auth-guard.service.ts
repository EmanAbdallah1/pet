import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var isActive = false;
    if (localStorage.getItem('access_token') == null) { isActive = false; }
    else {
      let roles = route.data["roles"] as Array<string>;
      let permisions = JSON.parse(localStorage.getItem("UserPermisions") ?? "") as Array<string>;

      if (roles.length > 0) {
        roles.forEach(el => {
          if (permisions.includes(el)) {
            isActive = true;
          }
        });
      } else {
        isActive = true;
      }
    }


    if (!isActive) {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    }
    return isActive;
  }
}
