import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  value: string | undefined;
  dialogInfo!: TemplateRef<NgIfContext<boolean>>|null;
  constructor(private chatServices:ChatService) { }

  ngOnInit(): void {
    this.chatServices.conversation.subscribe((val:any) => {
      this.messages = this.messages.concat(val);
    })
  }

  sendMessage() {
    this.chatServices.getBotAnswer(this.value);
    this.value = '';
  }

}
