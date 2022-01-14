import { Component, OnInit, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscription } from 'rxjs';

import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: String = '';
  height: String = '';
  HEIGHT_STYLE_PREPEND: String = 'height: ';
  HEIGHT_STYLE_APPEND: String = 'px;';

  constructor(
    private userService: PlayerService,
    private socket: Socket,
    private loginService: LoginService,
    private router: Router
  ) {
    this.height =
      this.HEIGHT_STYLE_PREPEND +
      window.innerHeight.toString() +
      this.HEIGHT_STYLE_APPEND;
  }

  ngOnInit(): void {
    this.socket.on('Player Exists', function (player: Player) {
      console.log(player.username + ' is already queued up!');
    });
    this.socket.on('emptyString', this.userAttemptedToSubmitAEmptyString);
  }

  newPlayer(): void {
    this.userService.newPlayer(this.username);
    this.username = '';
  }

  login(): void {
    this.newPlayer();
    this.router.navigate(['queue']);
  }

  userAttemptedToSubmitAEmptyString(): void {
    console.log('Empty Strings are not acceptible');
  }
}
