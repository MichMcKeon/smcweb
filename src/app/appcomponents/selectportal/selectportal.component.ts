import { Component, OnInit, OnChanges, Output, Input, EventEmitter,Pipe,PipeTransform } from '@angular/core';
import { SfportalrequestsService } from 'src/app/appservices/sfportalrequests.service';
import { ActivatedRoute,Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Createportaluserrecord } from 'src/app/appclasses/createportaluserrecord';

@Component({
  selector: 'app-selectportal',
  templateUrl: './selectportal.component.html',
  styleUrls: ['./selectportal.component.css']
})
export class SelectportalComponent implements OnChanges, OnInit  {
 
  approute: string = 'smc';
 
  public portalprivacy: string | undefined;  

locatekey='&key=691b80e9eb7c41f7af14cacbc9c931d1';
@Input() adminid='';
user='';
usercountry='';
usergmt='';
portals:any;
portallinks:any;
portal='';
portalid='';
portalgmt='';
today: number = Date.now() ;
portaltoday= '';
usertoday='';
dist='';
ibuserid='';
consultuserid='';
smc='';
@Input() view='portalaccept';
portalaccept=false;

portaltimezone='';

gmt='GMT+5'
day:number =0;
portallocaldate='';


portallocaltime= '';
//showcontent='content-whytrade';
test='a1g3z000009WIbZ';

////////////////////////////test/////////////////////////////////
testget(){
this.sfportalrequestsService.getthisportaluser(this.test)
   .subscribe((response:any) =>{
     console.log('gotuser',response);
this.portal=response.Portal__c;
this.dist=response.Distributor_Code__c;
this.ibuserid=response.IB_Name__c;
this.consultuserid=response.Dist_Consultant_Name__c;
this.usercountry=response.User_Country__c;
this.smc = response.SMC_Office_Id__c;
this.portalid = response.Portal_id__c;
this.portalgmt= response.Portal_TimeZone__c;
this.usergmt = response.Timezone__c;
this.portaltoday= new  Date().toLocaleString('en-US', {
  timeZone:   this.portalgmt});
console.log('portalis',this.portal, this.portaltoday);

   this.sfportalrequestsService.getthisportal(this.portalid)
   .subscribe((response:any) =>{
    console.log(response);
    this.portals = response;
 
  this.sfportalrequestsService.getthisportallinks(this.portal)
  .subscribe((response) =>{
   console.log(response);
   this.portallinks = response;
  
 });  });  }); 
}



  createportaluserModel = new Createportaluserrecord('','','','','','','','','','','','','','','');
 
  ngOnChanges(): void {
  
   
 }
    constructor(private route:ActivatedRoute, private http:HttpClient, private sfportalrequestsService:SfportalrequestsService) { }
   
   enter(){
      this.portalaccept = true;
   }

   portalmessageadminid(value:string){
    this.adminid = value;
    console.log('gotadminid',this.adminid);
  }
  showview(value:string){
   this.view=value;
   console.log(this.view);
 }

updateportaltoday(){
  this.portaltoday= new  Date().toLocaleString('en-US', {
    timeZone:   this.portalgmt});

    this.usertoday= new  Date().toLocaleString('en-US', {
      timeZone:   this.usergmt});  
  console.log('portaltoday',this.portaltoday, 'usertoday',this.usertoday);
  console.log(this.portaltoday, this.portalgmt);
}
redirect(){
  window.location.href="portal/";
   
 };

 

  

 // this.http.get<any>(" https://ipapi.co/json/")
 // .subscribe((res: any)=>{
 // console.log(res);
// this.createportaluserModel.ip=res.ip;
// this.createportaluserModel.country=res.country_name;
// this.createportaluserModel.city=res.city;
//this.createportaluserModel.continent=res.continent;
//this.createportaluserModel.countrycode=res.country_code;
//this.createportaluserModel.region=res.region;
//this.createportaluserModel.gmt=res.utc_offset;
//this.createportaluserModel.Timezone=res.timezone;
//this.createportaluserModel.dial=res.country_calling_code;
//this.createportaluserModel.currency=res.currency;
 //this.usercountry=res.country_name;
 //this.usergmt=res.timezone;
 //console.log(this.createportaluserModel);

 newuser(){

    this.http.get<any>("https://ipgeolocation.abstractapi.com/v1/?api_key=92f9b478a9f94813ba6bb387dca17562")
    .subscribe((res: any)=>{
    console.log(res);
    
this.createportaluserModel.ip=res.ip_address;
   this.createportaluserModel.country=res.country;
     this.createportaluserModel.city=res.city;
this.createportaluserModel.Timezone=res.timezone.name;
this.createportaluserModel.currency=res.currency.currency_code;
     this.usercountry=res.country;
     this.usergmt=res.timezone.name;
     console.log(this.createportaluserModel);
  

    
  // this.createportaluserModel.ip='100000000';
   //  this.createportaluserModel.country='South Africa';
   //   this.createportaluserModel.city='Johannesburg';
 // this.createportaluserModel.Timezone='Africa/Johannesburg';
 //this.createportaluserModel.currency='ZAR';
   
  //  console.log(this.createportaluserModel);

   this.route.params.subscribe(
    (params:Params) => {
 
      if(params['m'] ){
        this.createportaluserModel.parm=params['m'];
        }else{this.createportaluserModel.parm='SMC'};

       if(params['d'] ){
       this.createportaluserModel.dist=params['d'].toUpperCase();
       }else{this.createportaluserModel.dist='SMC'};

        if(params['p'] ){
        this.createportaluserModel.prodpayopt=params['p'];
         }else{this.createportaluserModel.prodpayopt='none'};
         
          if(params['c'] ){
         this.createportaluserModel.consult=params['c'];
           }else{this.createportaluserModel.consult='202123'};
           
            if(params['ib'] ){
              this.createportaluserModel.ib=params['ib'];
            }else{this.createportaluserModel.ib='202122'};
            console.log(this.createportaluserModel);

          this.sfportalrequestsService.createportaluserrecord(this.createportaluserModel)
 .subscribe((response:any) =>{
   console.log(response.id);
  
   this.user =response.id;
   console.log('got',this.user);

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
this.portalgmt= response.Portal_TimeZone__c;
this.usergmt = response.Timezone__c;
this.portaltoday= new  Date().toLocaleString('en-US', {
  timeZone:   this.portalgmt});
console.log('portalis',this.portal, this.portaltoday);

   this.sfportalrequestsService.getthisportal(this.portalid)
   .subscribe((response:any) =>{
    console.log(response);
    this.portals = response;
 
  this.sfportalrequestsService.getthisportallinks(this.portal)
  .subscribe((response) =>{
   console.log(response);
   this.portallinks = response;
  
 });  });  }); 
 });});
});

};  
ngOnInit(): void {
  this.http.get('assets/docs/portalterms.html', {
    responseType : 'text'
 })
 .subscribe((data) => {

  this.portalprivacy = data

  });
}}
