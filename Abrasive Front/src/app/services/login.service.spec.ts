import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

describe('LoginService', () => {
  let service: LoginService;

  const config: SocketIoConfig = { url: 'http://localhost:9876' };
  beforeEach(() => {
    TestBed.configureTestingModule({      
      imports: [ SocketIoModule.forRoot(config) ],
      providers: [ LoginService ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
