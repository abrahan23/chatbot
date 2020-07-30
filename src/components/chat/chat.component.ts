import { Component, OnInit , Renderer2, ElementRef, ViewChild, AfterContentChecked} from '@angular/core';
import { NgModule } from '@angular/core';
import { ImageCardComponent } from '../image-card/image-card.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

@NgModule({
  declarations: [ImageCardComponent],
  imports: [],
  exports: []
})

export class ChatComponent implements OnInit {
  @ViewChild('Messages', {static: true}) Message: ElementRef;
  @ViewChild('ulMessages', {static: true}) messages: ElementRef;
  @ViewChild('textMessage', {static: true}) textMessage: ElementRef;

  constructor( private renderer: Renderer2) { }

  ngOnInit() {}

  OpenClose(element: ElementRef, element2: ElementRef) {
    this.renderer.setStyle( element, 'display', 'none');
    this.renderer.setStyle( element2, 'display', 'block');
    this.Message.nativeElement.scrollTop = this.Message.nativeElement.scrollHeight;
  }

  newMessage() {
    if (this.textMessage.nativeElement.value != '') {
      const li: HTMLParagraphElement = this.renderer.createElement('li');
      this.renderer.addClass(li, 'sent');
      li.innerHTML = '<p>' + this.textMessage.nativeElement.value + '</p';
      this.textMessage.nativeElement.value = '';
      this.renderer.appendChild(this.messages.nativeElement, li);
      this.Message.nativeElement.scrollTop = this.Message.nativeElement.scrollHeight;
    }
  }

  onKeydown(event) {
    this.newMessage();
  }

}
