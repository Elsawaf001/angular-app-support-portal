import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivityService} from "./service/activity.service";
import {IndustrialOrderService} from "./service/industrial-order.service";
import {LicenceAreaService} from "./service/licence-area.service";
import {OrderSubscriberService} from "./service/order-subscriber.service";
import {RealStateOrderService} from "./service/real-state-order.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ActivityService, IndustrialOrderService
    , LicenceAreaService, OrderSubscriberService, RealStateOrderService]
})
export class OrderAppModule {
}
