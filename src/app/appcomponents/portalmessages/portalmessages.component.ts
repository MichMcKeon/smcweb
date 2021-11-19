import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SfportalrequestsService } from 'src/app/appservices/sfportalrequests.service';
import {Updateportaluser} from 'src/app/appclasses/updateportaluser';

@Component({
  selector: 'app-portalmessages',
  templateUrl: './portalmessages.component.html',
  styleUrls: ['./portalmessages.component.css']
})
export class PortalmessagesComponent implements OnInit {
  @Input () user='';
  @Input () portalid='';
  @Input () adminid='';

  updateportaluserModel = new Updateportaluser('','','')
  response='';
  responsefield='';
  userdetail:any;
  constructor(private http:HttpClient, private sfportalrequestsService:SfportalrequestsService) { }

  portaluseraccess(){
    
  }

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
