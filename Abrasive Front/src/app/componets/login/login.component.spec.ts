import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoginComponent } from './login.component';
const config: SocketIoConfig = { url: 'http://localhost:9876' };
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SocketIoModule.forRoot(config) ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
