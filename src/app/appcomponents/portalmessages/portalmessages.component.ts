import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from "@angular/common";
import { SfportalrequestsService } from 'src/app/appservices/sfportalrequests.service';
import {Updateportaluser} from 'src/app/appclasses/updateportaluser';
import {Portalmessage} from 'src/app/appclasses/portalmessage';
import {Portalemail} from 'src/app/appclasses/portalemail';
import { Portallog } from 'src/app/appclasses/portallog';

@Component({
  selector: 'app-portalmessages',
  templateUrl: './portalmessages.component.html',
  styleUrls: ['./portalmessages.component.css']
})
export class PortalmessagesComponent implements OnInit {
  @Input () user='';
  @Input () portalid='';
  @Input () adminid='';


portallogModel = new Portallog ('','','','','','','')
  portalemailModel = new Portalemail('','','')
  updateportaluserModel = new Updateportaluser('','','')
  portalmessageModel = new Portalmessage('','','','','')
  response='';
  responsefield='';
  userdetail:any;
  userResponse='';
  mobilevalid=true;
  emailvalid=true;
  privacyvalid=false;
  messagesent=false;


  responsetype='';
  constructor(private http:HttpClient, private sfportalrequestsService:SfportalrequestsService) { }
  addmessage(value:string){
this.portalmessageModel.userid = this.user;
this.portalmessageModel.portalid = this.portalid;
this.portalmessageModel.adminid = this.adminid;
this.portalmessageModel.message = value;
console.log(this.portalmessageModel);
  };
  checkmobile(value:string){
    console.log(value);
  this.http.get("https://phonevalidation.abstractapi.com/v1/?api_key=19d8716db8374b80905962fa3a30c8bb&phone=" + value)
 .subscribe((res: any)=>{
 console.log(res);
 this.mobilevalid = res.valid;

 });
};
checkemail(value:string){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
  {
    this.emailvalid =true;
  }else
    this.emailvalid=false;
    console.log(this.emailvalid);
};
checkvalid(value:boolean){
if(value == true) {
this.privacyvalid = value;
console.log(this.privacyvalid);
};
}

  addresponse(value:string){
    this.portalmessageModel.responsetype = value;
    console.log(this.portalmessageModel);
  };
  sendmessage(){
    console.log(this.portalmessageModel);
    this.sfportalrequestsService.createmessage(this.portalmessageModel)
    .subscribe((response:any) =>{
      console.log(response);
      //window.location.href="portal/"+ response.id;
  
      console.log('message created',this.response);
    
      if(this.portalmessageModel.responsetype == 'Portal Message'){

      this.sfportalrequestsService.getthisportaluser(this.user)
      .subscribe((response:any) =>{
        console.log('gotuserupdate',response);
        this.portalemailModel.useremail = response.User_Dial__c + response.User_Mobile_Number__c + '@mymobileapi.com';
     
        this.portalemailModel.usermessage = 'SMC Portal Access Username:' + response.Username__c + ' Password:' + response.User_Password__c;
        this.portalemailModel.usersubject = '[un=hardus][pw=zelda][ack=1]';
        console.log('portalemailnmodel',this.portalemailModel);
    
      this.sfportalrequestsService.sendportallogin(this.portalemailModel)
      .subscribe((response:any) =>{
        console.log('email', response);
        this.portallogModel.emailid = response.messageId;
        this.portallogModel.userid = this.user;
        this.portallogModel.useraction = 'Portal Access Generated';
        this.portallogModel.New =    this.portalemailModel.useremail;

        
        this.sfportalrequestsService.createportallog(this.portallogModel)
        .subscribe((response:any) =>{  
          console.log('portallog',response);
     
    
        this.updateportaluserModel.userid = this.user;
        this.updateportaluserModel.New  = '0123z000000RXy9';
    this.updateportaluserModel.Field = 'RecordTypeId';
      this.sfportalrequestsService.updateuser(this.updateportaluserModel)
      .subscribe((response:any) =>{
        console.log(response);
        //window.location.href="portal/"+ response.id;
        this.response =response.id;
        console.log('updated',this.response);
      }); 
    });    
  });
});
}
this.messagesent=true;
console.log('messagesent',this.messagesent)
});

    };
  

  sfupdate(value:string,name:string){
    this.updateportaluserModel.New  = value;
    this.updateportaluserModel.Field = name;
    this.updateportaluserModel.userid = this.user;
    this.responsefield = name;
  this.sfportalrequestsService.updateuser(this.updateportaluserModel)
  .subscribe((response:any) =>{
    console.log(response);
    //window.location.href="portal/"+ response.id;
    this.response =response.id;
    console.log('updated',this.response);
  
  });
};

  ngOnInit(): void {
    if(this.user ){
    this.sfportalrequestsService.getthisportaluser(this.user)
    .subscribe((response:any) =>{
      console.log('gotuser',response);
      this.userdetail = response;
    
  })
  };

}}
