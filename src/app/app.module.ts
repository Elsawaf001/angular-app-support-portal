import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "./user-authentication/service/authentication.service";
import {AuthenticationGuard} from "./user-authentication/guard/authentication.guard";
import {AuthenticationInterceptor} from "./user-authentication/interceptor/authentication.interceptor";
import {UserService} from "./user-authentication/service/user.service";
import {OrderAppModule} from "./order-app/order-app.module";
import {NotificationModule} from "./notification/notification.module";
import {NotificationService} from "./notification/service/notification.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    OrderAppModule,
    NotificationModule
  ],
  providers: [AuthenticationService, AuthenticationGuard, UserService, NotificationService, {
    provide: HTTP_INTERCEPTORS
    , useClass: AuthenticationInterceptor, multi: true
  }] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
