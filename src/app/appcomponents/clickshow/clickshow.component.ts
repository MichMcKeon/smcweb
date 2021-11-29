import { Component, OnInit,Input } from '@angular/core';
import { SfportalrequestsService } from 'src/app/appservices/sfportalrequests.service';
import { ActivatedRoute,Params,UrlSegment } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-clickshow',
  templateUrl: './clickshow.component.html',
  styleUrls: ['./clickshow.component.css']
})
export class ClickshowComponent implements OnInit {
  @Input () thisapproute = '';
  @Input () view = '';
  approute='click';
  nextonclick=1;
  hovertext='hide';
  clickroute='';
    clickitem:any;

     constructor(private route:ActivatedRoute, private router: Router,private http:HttpClient, private sfportalrequestsService:SfportalrequestsService) { 
     
     }

 
   
 
  gonext(){
    this.nextonclick=this.nextonclick + 1;
    console.log(this.nextonclick)
  }
  restart(){
    this.nextonclick=1;
  }
  gohover(value:string){
    this.hovertext=value;
  }
    ngOnInit(): void {
    
      
      this.clickroute=this.router.url;
      console.log(this.thisapproute);
  
      this.sfportalrequestsService.getclickshow()
      .subscribe((response:any) =>{
        console.log(response);
        this.clickitem=response;
    });
    }
  
  }
