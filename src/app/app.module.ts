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
import { GlobalviewComponent } from './appcomponents/globalview/globalview.component';
import { VideoplayerComponent } from './appcomponents/videoplayer/videoplayer.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChatComponent } from './appcomponents/chat/chat.component';
import { PaymentComponent } from './appcomponents/payment/payment.component';



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
    PortalchatComponent,
    GlobalviewComponent,
    VideoplayerComponent,
    ChatComponent,
    PaymentComponent
   
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
    MatFormFieldModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
