import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";
import {NotificationService} from "../../notification/service/notification.service";
import {NotificationType} from "../../notification/service/notification-type";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router, private notificationService: NotificationService) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)   : Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserLoggedIn();
  }


  private isUserLoggedIn() : boolean {
    if (this.authenticationService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']).then(() => {
      console.log('Navigation successful');
    }).catch((error) => {
      console.log('Navigation failed', error);
    });
    this.notificationService.notify(NotificationType.error, "You need to Log In To Access This Page".toUpperCase())
    return false;
  }

}
