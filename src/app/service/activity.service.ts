import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {Activity} from "../model/activity";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  private host :string = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.host}/activities`);
  }


    getActivityById(id: number): Observable<Activity> {
      const data = new (window as any).FormData();
      data.append("id",id.toString())
      return this.http.get<Activity>(`${this.host}/activity` , {params : data});
    }



}
