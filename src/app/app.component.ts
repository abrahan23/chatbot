import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {ChatComponent} from '../components/chat/chat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: []
})

export class AppComponent {
  title = 'Chat';
}
