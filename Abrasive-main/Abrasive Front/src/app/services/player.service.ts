import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(public socket: Socket) { }

  newPlayer(username: String) {
    this.socket.emit('newUser', new Player(username));
  }
}