
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs  from 'video.js';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoplayerComponent implements OnInit {
  
  player = videojs.Player
 




  
constructor()
  
 { }

ngOnInit() {
  // instantiate Video.js
}

}


