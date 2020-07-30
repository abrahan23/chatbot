import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ImageCardComponent } from '../components/image-card/image-card.component';
import { HelpComponent } from '../components/help/help.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChatComponent,
        ImageCardComponent,
        HelpComponent,
        NavBarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Chat'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Chat');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to chat!');
  // });
});
