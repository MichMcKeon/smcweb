import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SfportalrequestsService } from 'src/app/appservices/sfportalrequests.service';
import {Updateportaluser} from 'src/app/appclasses/updateportaluser';
import { HttpClient } from '@angular/common/http';

import videojs  from 'video.js';

@Component({
  selector: 'app-viewlearning',
  templateUrl: './viewlearning.component.html',
  styleUrls: ['./viewlearning.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ViewlearningComponent implements OnInit {
  @Input () user = '';
  @Input () portal='';
  @Input () smc='';
  updateportaluserModel = new Updateportaluser('','','')
  
  player = videojs.Player
  
  constructor(private sfportalrequestsService:SfportalrequestsService, private http:HttpClient) { }
 
  learningpolicy:any;
portalproducts:any;  
products:any;
  prices:any;
  pricediscounts:any;
  discounted:any;
  userdetail:any;
  selectedproduct='';
  portalid='';
  coupon='';
  priceid='';
  showlearn='';
  showprice='show';
  showcoupon='hide';
showdiscount='hide';


  checkcoupon(value:string){
    this.coupon = value;
    console.log(this.coupon)
  }
  clearcoupon(){
    this.coupon = '';  
    this.priceid = '';
    this.showdiscount = 'hide';
    this.showprice= 'show';
  }
  getlearning(value:string){
    this.showlearn = value;
    console.log(this.showlearn);
  }
  getdiscount(){ 
this.showdiscount='show';
this.showprice='hide';
this.showcoupon='hide';
this.priceid = this.updateportaluserModel.New ;
console.log('priceid',this.priceid);
console.log('discount',this.showdiscount);
console.log('price',this.showprice);
console.log('coupon',this.showcoupon);

this.sfportalrequestsService.getthisproductspricediscount(this.priceid)
    .subscribe((response:any) =>{
     console.log(response);
     this.discounted = response;
    }); 
  }
  getcoupon(){ 
    this.showdiscount='hide';
    this.showprice='hide';
    this.showcoupon='show';
    this.priceid = this.updateportaluserModel.New ;
    console.log('priceid',this.priceid);
    console.log('discount',this.showdiscount);
    console.log('price',this.showprice);
    console.log('coupon',this.showcoupon);

    this.sfportalrequestsService.getthisproductspricediscount(this.priceid)
    .subscribe((response:any) =>{
     console.log(response);
     this.discounted = response;
    }); 


      }
      getprice(){ 
        this.showdiscount='hide';
        this.showprice='show';
        this.showcoupon='hide';
        console.log('discount',this.showdiscount);
console.log('price',this.showprice);
console.log('coupon',this.showcoupon);
          }
 
   sfupdate(value:string,name:string){
    this.updateportaluserModel.New  = value;
    this.updateportaluserModel.Field = name;
    this.updateportaluserModel.userid = this.user;
    
  this.sfportalrequestsService.updateuser(this.updateportaluserModel)
  .subscribe((response:any) =>{
    console.log(response);
    //window.location.href="portal/"+ response.id;

  
  });
};
  

  ngOnInit(): void {
    this.http.get('assets/docs/calendarpolicy.html', {
      responseType : 'text'
   })
   .subscribe((data) => {
    this.learningpolicy = data
    });

    if(this.user ){
      this.sfportalrequestsService.getthisportaluser(this.user)
      .subscribe((response:any) =>{
        console.log('gotuser',response);
        this.userdetail = response; 
        this.portalid = response.Portal_id__c;
        this.selectedproduct=response.Product_Payment_Option_Parm__c;
        console.log('gotportalid',this.portalid);
        console.log('selectedproduct',this.selectedproduct);
      
     
    this.sfportalrequestsService.getthisportalproducts(this.portalid)
    .subscribe((response:any) =>{
     console.log(response);
     this.products = response;

 
   this.sfportalrequestsService.getthisportalproductsprice(this.portalid)
   .subscribe((response:any) =>{
    console.log(response);
    this.prices = response;

    
    this.sfportalrequestsService.getthisportalproductspricediscount(this.portalid)
    .subscribe((response:any) =>{
     console.log(response);
     this.pricediscounts = response;
    }); 
  }); 
}); 
});

};
  }
}
