import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderSubscriber} from "../model/order-subscriber";
import {environment} from "../../../environments/environment.development";
import {CustomHttpResponse} from "../../user-authentication/model/custom-http-response";

@Injectable({
  providedIn: 'root'
})
export class OrderSubscriberService {
  private host : string = `${environment.apiUrl}/app` ;

  constructor(private http : HttpClient) { }

  public getAll():Observable<OrderSubscriber[]>{
    return this.http.get<OrderSubscriber[]>(`${this.host}/subscribers`);
  }

public createOrderSubscriber(formData : FormData ):Observable<OrderSubscriber | HttpErrorResponse>{
    return this.http.post<OrderSubscriber>(`${this.host}/subscriber` , formData);
}

public findSubscriber(name :string):Observable<OrderSubscriber>{
    return this.http.get<OrderSubscriber>(`${this.host}/findSubscriber/${name}`);
}


public deleteSubscriber(name:string):Observable<CustomHttpResponse>{
    return this.http.delete<CustomHttpResponse>(`${this.host}/deleteSubscriber/${name}`)
}

  public postBalance(balance:number):Observable<CustomHttpResponse | HttpErrorResponse>{
    const formData = new FormData();
    formData.append("balance",balance.toString());
    return this.http.post<CustomHttpResponse>(`${this.host}/subscriberBalance` , formData);
  }


public createOrderSubscriberFormData(orderSubscriber :OrderSubscriber):FormData {
    const formData = new FormData();
    formData.append("name",orderSubscriber.name);
  formData.append("address",orderSubscriber.address);
  formData.append("sector",orderSubscriber.sector);
  formData.append("group",orderSubscriber.group);
  formData.append("area",orderSubscriber.area);
  formData.append("block",orderSubscriber.block);
  formData.append("state",orderSubscriber.state);
  formData.append("branch",orderSubscriber.branch);
  formData.append("nationalId",orderSubscriber.nationalId);
  formData.append("phoneNumber",orderSubscriber.phoneNumber);
  formData.append("facilityName",orderSubscriber.facilityName);
  formData.append("balance", orderSubscriber.balance.toString());
  formData.append("secondPhoneNumber",orderSubscriber.secondPhoneNumber);
  return formData;

}
}
