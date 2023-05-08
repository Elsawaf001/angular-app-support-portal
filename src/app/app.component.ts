import {Component, OnInit} from '@angular/core';
import {ActivityService} from "./service/activity.service";
import {Activity} from "./model/activity";
import {HttpEvent} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
activity : Activity | undefined;
  constructor(private service: ActivityService) {
  }
  ngOnInit(): void {
this.service.getActivityById(200002).subscribe(
  d => {
    console.log(d)
this.activity = d;
  }

)
  }



}
