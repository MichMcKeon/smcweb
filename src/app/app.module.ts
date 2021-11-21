import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatCommonModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SelectportalComponent } from './appcomponents/selectportal/selectportal.component';
import { ClickshowComponent } from './appcomponents/clickshow/clickshow.component';
import { ScheduleComponent } from './appcomponents/schedule/schedule.component';
import { FooterComponent } from './appcomponents/footer/footer.component';
import { PortalmessagesComponent } from './appcomponents/portalmessages/portalmessages.component';
import { SmcComponent } from './appcomponents/smc/smc.component';
import { UserportalComponent } from './appcomponents/userportal/userportal.component';
import { ViewlearningComponent } from './appcomponents/viewlearning/viewlearning.component';
import { PortalchatComponent } from './appcomponents/portalchat/portalchat.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectportalComponent,
    ClickshowComponent,
    ScheduleComponent,
    FooterComponent,
    PortalmessagesComponent,
    SmcComponent,
    UserportalComponent,
    ViewlearningComponent,
    PortalchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatCommonModule,
    MatTableModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
