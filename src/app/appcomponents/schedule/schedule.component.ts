import { Component, OnInit,Input } from '@angular/core';
import { SfportalrequestsService } from 'src/app/appservices/sfportalrequests.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input () portal='';
  @Input () portalid='';
  @Input () usergmt='';
  @Input () portalgmt='';


usersportal:any;
hours:any;
events:any;
today: number = Date.now() ;
portaltoday='';
portalmonth=0;
portalmonthnext=0;
portalyear=0;
portalday=0;
usertoday='';
portalusertimediff=0;
showevent='';
eventtype='';

constructor(private sfportalrequestsService:SfportalrequestsService) { }
  showevents(value:string){
    this.showevent = value;
  };

  showeventtype(value:string){
    this.eventtype = value;
  };
  ngOnInit(): void {
  
    console.log('usergmt',this.usergmt);
    console.log('portalgmt',this.portalgmt);
this.portalmonth = new Date().getMonth()+1;
this.portalmonthnext = new Date().getMonth()+2;
this.portalyear = new Date().getFullYear();
this.portalday = new Date().getDate();
console.log('portalmonth',this.portalmonth);
console.log('portalyear',this.portalyear);
console.log('portalday',this.portalday);
   
      this.portaltoday= new  Date().toLocaleString('en-US', {
        timeZone:   this.portalgmt});

        this.usertoday= new  Date().toLocaleString('en-US', {
          timeZone:   this.usergmt});  
      console.log('portaltoday',this.portaltoday, 'usertoday',this.usertoday);

      var portaldate = new Date(this.portaltoday); 
      var userdate = new Date(this.usertoday); 
      var portaltime = portaldate.getHours();
      var usertime = userdate.getHours();
      if(portaltime > usertime){
      this.portalusertimediff = portaltime - usertime;
      }
      if(portaltime < usertime){
        this.portalusertimediff = usertime - portaltime;
       };  console.log(this.portalusertimediff );
      

    this.sfportalrequestsService.getthisportal(this.portalid )
.subscribe((response) =>{
 console.log('userportal',response);
 this.usersportal = response;
});


this.sfportalrequestsService.geteventthisportal(this.portal )
.subscribe((response) =>{
 console.log('portalevents',response);
 this.events = response;
});


this.sfportalrequestsService.gethourthisportal(this.portal )
.subscribe((response) =>{
 console.log('portalhours',response);
 this.hours = response;
});
  }

}
