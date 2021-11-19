import { Injectable } from '@angular/core';
import { SfrequestsService } from './sfrequests.service';

@Injectable({
  providedIn: 'root'
})
export class SfportalrequestsService {

  constructor(private sfService:SfrequestsService) { }
  
  createportaluserrecord(payload:Object){
    return this.sfService.post('smccreate/portaluserrecord',payload)
    }
  
 // createparamashit(payload:Object){
  //    return this.sfService.post('smccreate/paramashit',payload)
   //   }
  

   
  getthisportal(p:string){
    return this.sfService.get(`portal/${p}`);
  }
  

  geteventthisportal(o:string){
    return this.sfService.get(`eventthisportal/${o}`);
  }
  gethourthisdivision(o:string){
    return this.sfService.get(`hourthisdivision/${o}`);
  }
  gethourthisportal(o:string){
    return this.sfService.get(`hourthisportal/${o}`);
  }
  gethourthisdepart(o:string){
    return this.sfService.get(`hourthisdepart/${o}`);
  }
  
  getportalbadge(p:string){
    return this.sfService.get(`portalbadge/${p}`);
  }

  getportals(){
    return this.sfService.get('allportals');
  }

  getportallinks(){
    return this.sfService.get('allportallinks');
  }
  getthisportallinks(p:string){
    return this.sfService.get(`portallinks/${p}`);
  }
  getportalthisadmin(sfid:string){
    return this.sfService.get(`portalthisadminuser/${sfid}`);
  }
  

  getportalalldivision(portal:string){
    return this.sfService.get(`portalalldivision/${portal}`);
  }

  getportalalldepartment(portal:string){
    return this.sfService.get(`portalalldepartment/${portal}`);
  }

  getportalalladmin(portalid:string){
    return this.sfService.get(`getportalalladmin/${portalid}`);
  }

  getclickshow(){
    return this.sfService.get('getclickshow');
  }

  //getportalalladminbydepartment(portal:string){
  //  return this.sfService.get(`allportalconsult/${portal}`);
 // }


  getportalthissmcoffice(smcoffice:string){
    return this.sfService.get(`portalthissmcoffice/${smcoffice}`);
  }

  getportalallsmcoffice(){
    return this.sfService.get('portalallsmcoffice');
  }

  updateuser(payload:Object){
    return this.sfService.post('smcupdate/portaluserrecord',payload)
    }

    createmessage(payload:Object){
      return this.sfService.post('smccreate/portalmessage',payload)
      }
    
 // getportalthisibroker(ibroker:string){
 //   return this.sfService.get(`portalthisibroker/${ibroker}`);
 // }

  //getportalallibroker(portal:string){
  //  return this.sfService.get(`portalallibroker/${portal}`);
 // }


  getallportalproducts(){
    return this.sfService.get('allportalproducts');
  }

  getthisportalproducts(portal:string){
    return this.sfService.get(`thisportalproducts/${portal}`);
}


getthisproductspricediscount(priceid:string){
  return this.sfService.get(`thisproductspricediscount/${priceid}`);
}

getthisproductsprice(payid:string,portal:string){
  return this.sfService.get(`thisproductsprice/${payid}/${portal}`);
}

getthisportalproductsprice(portal:string){
  return this.sfService.get(`thisportalproductsprice/${portal}`);
}

getthisportalproductspricediscount(portal:string){
  return this.sfService.get(`thisportalproductspricediscount/${portal}`);
}

getthisportalproductlearningenvironment(){
  return this.sfService.get('thisportalproductlearningenvironment');
}


getallportalproductsprice(){
  return this.sfService.get('allportalproductsprice');
}

sendportallogin(payload:Object){
  return this.sfService.post('sendemail',payload);
  }
  createportallog(payload:Object){
    return this.sfService.post('smccreate/portallog',payload);
    }
 
  getportalcountries(){
    return this.sfService.get('allportalcountries');
  }
  getthisportalcountries(c:string){
    return this.sfService.get(`allportalcountries/${c}`);
  }
  
 

  getthisportaluser(p:string){
    return this.sfService.get(`portaluser/${p}`);
  }

  getportalparmsthisuser(parm:string){
    return this.sfService.get(`portalparmsthisuser/${parm}`);
  }
}

