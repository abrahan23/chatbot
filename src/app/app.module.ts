import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from '../components/chat/chat.component';
import { ImageCardComponent } from '../components/image-card/image-card.component';
import { HelpComponent } from '../components/help/help.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ImageCardComponent,
    HelpComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
