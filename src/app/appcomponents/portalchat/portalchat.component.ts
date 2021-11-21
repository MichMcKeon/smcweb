import { Component, OnInit } from '@angular/core';
import { PortalchatService } from 'src/app/appservices/portalchat.service';

@Component({
  selector: 'app-portalchat',
  templateUrl: './portalchat.component.html',
  styleUrls: ['./portalchat.component.css']
})
export class PortalchatComponent implements OnInit{

  newMessage: string | undefined;
  messageList: string[] = [];



  constructor(private portalchatService:PortalchatService) { }
  

  ngOnInit(): void {
    this.portalchatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
      console.log(this.messageList)
    })
  }

  sendMessage() {
    this.portalchatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
  
