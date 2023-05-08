import {OrderSubscriber} from "./order-subscriber";
import {Activity} from "./activity";

export class RealStateOrder {
  id: number;
  cost: number;
  orderSubscriber: OrderSubscriber;
  activity: Activity;
  applicantName: string;
  applicantAddress: string;
  applicantPhoneNumber: string;
  applicantNationId: string;
  businessHistory: string;
  applicationDate: Date;
  representativeName: string;
  facilityDirectorName: string;
  notes: string;

  constructor(realStateOrder: any) {
    this.id = realStateOrder.id;
    this.cost = realStateOrder.cost;
    this.orderSubscriber = new OrderSubscriber(realStateOrder.orderSubscriber);
    this.activity = new Activity(realStateOrder.activity);
    this.applicantName = realStateOrder.applicantName;
    this.applicantAddress = realStateOrder.applicantAddress;
    this.applicantPhoneNumber = realStateOrder.applicantPhoneNumber;
    this.applicantNationId = realStateOrder.applicantNationId;
    this.businessHistory = realStateOrder.businessHistory;
    this.applicationDate = new Date(realStateOrder.applicationDate);
    this.representativeName = realStateOrder.representativeName;
    this.facilityDirectorName = realStateOrder.facilityDirectorName;
    this.notes = realStateOrder.notes;
  }
}

