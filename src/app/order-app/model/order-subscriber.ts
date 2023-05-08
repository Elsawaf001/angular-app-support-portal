export class OrderSubscriber {

  id: number;
  name: string;
  address: string;
  sector: string;
  group: string;
  area: string;
  block: string;
  state: string;
  branch: string;
  nationalId: string;
  phoneNumber: string;
  facilityName: string;
  balance: number;
  secondPhoneNumber: string;

  constructor(orderSubscriber: any) {
    this.id = orderSubscriber.id;
    this.name = orderSubscriber.name;
    this.address = orderSubscriber.address;
    this.sector = orderSubscriber.sector;
    this.group = orderSubscriber.group_name;
    this.area = orderSubscriber.area;
    this.block = orderSubscriber.block;
    this.state = orderSubscriber.state;
    this.branch = orderSubscriber.branch;
    this.nationalId = orderSubscriber.national_id;
    this.phoneNumber = orderSubscriber.phone_number;
    this.facilityName = orderSubscriber.facility_name;
    this.balance = orderSubscriber.balance;
    this.secondPhoneNumber = orderSubscriber.second_phone_number;
  }
}

