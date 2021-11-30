
import { Component, OnInit,Input,Output,EventEmitter,Inject,ViewEncapsulation, OnChanges,Pipe,PipeTransform,LOCALE_ID } from '@angular/core';
import { SfportalrequestsService } from 'src/app/appservices/sfportalrequests.service';

import { ActivatedRoute,Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-smc',
  templateUrl: './smc.component.html',
  styleUrls: ['./smc.component.css']
})
export class SmcComponent implements OnInit, OnChanges {

  approute: string = 'smc';
  @Input () user = '';
  @Input () usergmt ='';
  @Input () portalgmt ='';
  @Input () portal='';
  @Input () smc='';
 
  @Output () adminid = new EventEmitter() ;
  @Output () view = new EventEmitter();

   locatekey='&key=691b80e9eb7c41f7af14cacbc9c931d1';
 
  
  usercountry='';

  showFiller = false;


portalid='';
dist='';
ibuserid='';
consultuserid='';


departments:any;
divisions:any;
usersportal:any;
portalhours:any;
admins:any;
smcdetail:any;
portallinks:any;

contactspolicy='';
boxpanelcontent1='hide';
showcontactdetail='hide';
viewcontacts='hide';
content="main";
divdepartment='';
divdepartmentstaff='';
 
portaltimezone='';

gmt='GMT+5'
day:number =0;
portallocaldate='';
today: number = Date.now() ;
portaltoday= formatDate(this.today,'medium','en-US',this.portalgmt);

portallocaltime= '';





constructor( private sfportalrequestsService:SfportalrequestsService,private route:ActivatedRoute, private http:HttpClient) { }


showboxpanelcontent1(value:string){
  this.boxpanelcontent1=value;
  console.log(this.boxpanelcontent1)
  }
showcontent(value:string){
  this.content=value;
  console.log('content',this.content)
}
showdepartment(value:string){
  this.sfportalrequestsService.getdepartments(value )
.subscribe((response) =>{
 console.log('departments',response);
 this.departments = response;
  this.divdepartment=value;
  console.log('divdepartment',this.divdepartment)
})
};
showdepartmentstaff(value:string){

 this.sfportalrequestsService.getadmin(value)
 .subscribe((response) =>{
  console.log('admins',response);
  this.admins = response;
  this.divdepartmentstaff=value;
  console.log('divdeptstaff',this.divdepartmentstaff)
})
};
sendportalmessage(value:string){
this.adminid.emit(value);
console.log(this.adminid);
}
gotomessageview(value:string){
  this.view.emit(value);
  console.log(this.view);

}

messagesmc(value:string){
 
 }
message(value:string){
   
 }
 //showcontacts(value:string){
//this.view.emit(value);
//console.log('view',this.view)
//}

getuserlocalportallocal(value:string){
 this.portaltimezone=value;
  console.log(this.portaltimezone);
  this.portallocaldate= formatDate(this.today,'medium','en-US',this.portalgmt);
   console.log('portal date',this.portallocaldate);
  
};
ngOnChanges(): void{
  if(!this.smcdetail)
this.sfportalrequestsService.getportalthissmcoffice(this.smc)
.subscribe((response) =>{
 console.log('smc',response);
 this.smcdetail = response;
 console.log('gotsmc on change',response);
});

}
    ngOnInit(): void{

      this.http.get('assets/docs/contactspolicy.html', {
        responseType : 'text'
     })
     .subscribe((data) => {
      this.contactspolicy = data
      });
      

if(this.user){
        this.sfportalrequestsService.getthisportaluser(this.user)
    .subscribe((response:any) =>{
      console.log('gotuser',response);
this.portal=response.Portal__c;
this.dist=response.Distributor_Code__c;
this.ibuserid=response.IB_Name__c;
this.consultuserid=response.Dist_Consultant_Name__c;
this.usercountry=response.User_Country__c;
this.smc = response.SMC_Office_Id__c;
this.portalid = response.Portal_id__c;
console.log('portalis',this.portal);

this.sfportalrequestsService.getportalthissmcoffice(this.smc)
.subscribe((response) =>{
 console.log('smc',response);
 this.smcdetail = response;

this.sfportalrequestsService.getthisportal(this.portalid )
.subscribe((response) =>{
 console.log('userportal',response);
 this.usersportal = response;



this.sfportalrequestsService.getportalalldivision(this.portal )
.subscribe((response) =>{
 console.log('divisions',response);
 this.divisions = response;




 


 this.sfportalrequestsService.gethourthisportal(this.portal )
.subscribe((response) =>{
 console.log('hours',response);
 this.portalhours = response;

 


  

//this.sfportalrequestsService.getthisportallinks(this.portal)
//.subscribe((response) =>{
 //console.log('links',response);
 //this.portallinks = response;

 

}); });  }); });   }); 
}
//});
     }}

