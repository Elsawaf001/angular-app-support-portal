import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "./service/authentication.service";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {AuthenticationInterceptor} from "./interceptor/authentication.interceptor";
import {UserService} from "./service/user.service";
import {ActivityService} from "./service/activity.service";
import {IndustrialOrderService} from "./service/industrial-order.service";
import {LicenceAreaService} from "./service/licence-area.service";
import {OrderSubscriberService} from "./service/order-subscriber.service";
import {RealStateOrderService} from "./service/real-state-order.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService , AuthenticationGuard ,UserService ,ActivityService ,IndustrialOrderService
    ,LicenceAreaService , OrderSubscriberService , RealStateOrderService, {provide : HTTP_INTERCEPTORS
    , useClass : AuthenticationInterceptor , multi : true}] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
