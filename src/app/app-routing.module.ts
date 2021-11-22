import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalchatComponent } from './appcomponents/portalchat/portalchat.component';
import { PortalmessagesComponent } from './appcomponents/portalmessages/portalmessages.component';
import{SelectportalComponent} from './appcomponents/selectportal/selectportal.component';



const routes: Routes = [
  {path: '' ,  component:SelectportalComponent },
  {path: 'smc' ,  component:SelectportalComponent },
  {path: 'smc/:user', component:SelectportalComponent },
  {path: 'smc-m/:m', component:SelectportalComponent },
  {path: 'smc-d/:d', component:SelectportalComponent },
  {path: 'smc-d/:d/:p', component:SelectportalComponent },
  {path: 'smc-d/:d/:p/:m', component:SelectportalComponent },
  {path: 'smc-ib/:ib', component:SelectportalComponent },
  {path: 'smc-ib/:ib/:p', component:SelectportalComponent },
  {path: 'smc-ib/:ib/:p/:m', component:SelectportalComponent },
  {path: 'smc-c/:d/:p/:c', component:SelectportalComponent },
  {path: 'smc-c/:d/:p/:c/:m', component:SelectportalComponent },
  {path: 'message', component:PortalmessagesComponent },
  {path: 'chat', component:PortalchatComponent },


  {path: '**', component:SelectportalComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
