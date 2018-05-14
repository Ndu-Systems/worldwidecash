import { Email } from './../Models/Email';
import { UserDataService } from './../shared/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ChatsService } from './chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  chats:any[];
  user:any;
  messageBody:string;
  constructor(private ChatsService:ChatsService, private UserDataService:UserDataService) { }

  ngOnInit() {
    this.user = this.UserDataService.getUser();
    this.getChats();
  }
getChats(){
  this.ChatsService.getChats(this.user.email)
  .subscribe((data)=>{
    if(data){
      this.chats = data.data;

    }
console.log(this.chats)
  });
}

Send() {
  if (this.messageBody) {
      var data = {
          senderEmail:this.user.email,
          senderName: this.user.name,
          receiverEmail: "admin@mail.com",
          receiverName: "Admin",
          messageBody: this.messageBody,
          clientId: this.user.email
      };

      this.ChatsService.sendChat(data)
      .subscribe((res)=>{
        this.getChats();
        this.messageBody='';
      });
    }
  }



}
