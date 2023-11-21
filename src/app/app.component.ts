import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-gpt';

  links = [
    {
      path:'/home',label:'home', active:'button-active'
    },
    {
      path:'/chat',label:'chat', active:'button-active'
    },
    {
      path:'/signin',label:'signin', active:'button-active'
    }
  ]
}
