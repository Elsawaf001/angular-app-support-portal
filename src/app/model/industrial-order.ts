import {OrderSubscriber} from "./order-subscriber";
import {Activity} from "./activity";
import {LicenceArea} from "./licence-area";

export class IndustrialOrder {
  id: number;
  cost: number;
  orderSubscriber: OrderSubscriber;
  activity: Activity;
  licenceArea: LicenceArea;
  representativeName: string;
  facilityDirectorName: string;
  notes: string;

  constructor(industrialOrder: any) {
    this.id = industrialOrder.id;
    this.cost = industrialOrder.cost;
    this.orderSubscriber = new OrderSubscriber(industrialOrder.orderSubscriber);
    this.activity = new Activity(industrialOrder.activity);
    this.licenceArea = new LicenceArea(industrialOrder.licenceArea);
    this.representativeName = industrialOrder.representativeName;
    this.facilityDirectorName = industrialOrder.facilityDirectorName;
    this.notes = industrialOrder.notes;
  }
}

