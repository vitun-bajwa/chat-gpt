import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class Message{
  constructor(public author:string, public content:string){}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  conversation = new Subject<Message[]>();
  messageMap:any = {
    "hi": "Hello",
    "how are you": "Thank you for asking! I don't have feelings, but I'm here and ready to help you with any questions or information you need. What can I do for you today?",
    "whats your name": "I'm just a computer program created by OpenAI. I don't have a personal name, but you can call me AI.",
    "whats your work": "I'm a language model created by OpenAI called AI. My primary function is to generate human-like text based on the input I receive. I can be used for a variety of natural language processing tasks, including answering questions, generating text based on prompts, language translation, summarization, and more.",
    "what is angular": "Angular is a popular open-source web application framework maintained by Google and a community of developers. It is written in TypeScript and helps developers build dynamic, single-page web applications (SPAs). Angular provides a comprehensive set of tools and libraries for tasks such as routing, forms, HTTP client, and state management.",
    "default": "It seems like your message is very brief and might be missing some context. Could you please provide more details or clarify your question? I'm here to help with any information or assistance you need!"
  }

  getBotAnswer(msg:any) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage])
    },2000);
  }

  getBotMessage(question:any) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }

  onEditorPreparing(e:any){
    if(e.parentType === "filterRow" && e.dataField == "OrderDate" && e.selectedFilterOperation === "between") {
        if(e.editorOptions.placeholder == "Start") { 
          e.editorOptions.value = new Date(); 
        } else {
          e.editorOptions.value = new Date(); 
          e.component.columnOption("OrderDate", "filterValue", [new Date(), new Date()]);
        }
    }
  }
}
