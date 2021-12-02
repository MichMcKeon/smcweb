import { Component, OnInit, OnChanges, Output, Input, EventEmitter,Pipe,PipeTransform } from '@angular/core';
import { SfportalrequestsService } from 'src/app/appservices/sfportalrequests.service';
import { ActivatedRoute,Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userportal',
  templateUrl: './userportal.component.html',
  styleUrls: ['./userportal.component.css']
})
export class UserportalComponent implements  OnInit {

   curr = new Date(); // get current date
   first = this.curr.getDate() - this.curr.getDay(); // First day is the day of the month - the day of the week
   last = this.first + 6; // last day is the first day + 6
  
   firstday = new Date(this.curr.setDate(this.first)).toUTCString();
   lastday = new Date(this.curr.setDate(this.last)).toUTCString();

    date = new Date();
 firstDayMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
 lastDayMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
 DayMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
 Day1Monthwekkday = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();

calendarmonth:any;
 days = Array.from(Array(this.DayMonth).keys()).map(x  => new Date(this.date.getFullYear(), this.date.getMonth(), x + 1));
 weekdays= Array.from(this.days)
// [1, 2, 3, 4, 5]
  
constructor(private route:ActivatedRoute, private http:HttpClient, private sfportalrequestsService:SfportalrequestsService) { }
getcalendarmonth(){
this.http.get('assets/docs/calendarmonth.html', {
  responseType : 'text'
})
.subscribe((data) => {
  this.calendarmonth = data
});

};


ngOnInit(): void {
}
}