import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ImageCardComponent } from '../image-card/image-card.component';
import { HelpComponent } from '../help/help.component';


describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatComponent,
        ImageCardComponent,
        HelpComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
