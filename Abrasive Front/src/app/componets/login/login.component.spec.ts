import { ComponentFixture, TestBed } from '@angular/core/testing';
import { io } from 'socket.io-client';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoginComponent } from './login.component';
import { PlayerService } from 'src/app/services/player.service';
import { LoginService } from 'src/app/services/login.service';
const config: SocketIoConfig = { url: 'http://localhost:9876' };
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testPlayerService: PlayerService;
  let testLoginComponet: LoginComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SocketIoModule.forRoot(config) ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(window.console, "log");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stop user from submitting an empty username', (done) => {
    const socket = io();
    testLoginComponet = TestBed.inject(LoginComponent);
    testLoginComponet.newPlayer();
    expect(testLoginComponet.userAttemptedToSubmitAEmptyString).toHaveBeenCalled();
    done();
  });
  
});
