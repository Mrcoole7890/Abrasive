import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { QueueComponent } from './componets/queue/queue.component';
import { HeaderComponent } from './componets/header/header.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {transports : ['websocket']} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QueueComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
