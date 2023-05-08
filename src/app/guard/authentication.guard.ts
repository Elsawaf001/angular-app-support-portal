import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authenticationService:AuthenticationService , private router :Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)   : Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserLoggedIn();
  }


  private isUserLoggedIn() : boolean{
    if (this.authenticationService.isLoggedIn()){
      return true ;
    }
    this.router.navigate(['/login']);
// i will put a login to send a notification to the user
    return false;
  }

}
