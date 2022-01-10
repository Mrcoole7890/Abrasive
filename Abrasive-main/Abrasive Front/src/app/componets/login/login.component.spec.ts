import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoginComponent } from './login.component';
import { io } from 'socket.io-client';

const config: SocketIoConfig = {url: "http://localhost:9876"};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocketIoModule.forRoot(config)],
      providers: [LoginComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(window.console, "log");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stop user from submitting an empty username', () => {
    let spy: jasmine.Spy = spyOn(component, "userAttemptedToSubmitAEmptyString");
    expect(component.username).toBe("");
    component.newPlayer();
    expect(spy).toHaveBeenCalled();
  });
});
