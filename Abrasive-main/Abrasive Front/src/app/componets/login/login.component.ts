import { Component, OnInit, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscription } from 'rxjs';

import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String = "";
  height: String = "";
  HEIGHT_STYLE_PREPEND: String = "height: ";
  HEIGHT_STYLE_APPEND: String = "px;";
  //private _userSub: Subscription;

  constructor(private playerService: PlayerService, private socket: Socket, private loginService: LoginService) { 
    this.height = this.HEIGHT_STYLE_PREPEND + window.innerHeight.toString() + this.HEIGHT_STYLE_APPEND;
  }

  ngOnInit(): void {
    this.socket.on("Player Exists", function(player: Player){
      console.log(player.username + " is already queued up!");
    });
    this.socket.on("emptyString", this.userAttemptedToSubmitAEmptyString);
  }

  newPlayer(): void {
    if (this.username != "")
      this.playerService.newPlayer(this.username);
    else
      this.userAttemptedToSubmitAEmptyString();
    this.username = "";
  }

  userAttemptedToSubmitAEmptyString(): void{
    console.log("Empty Strings are not acceptible");
  }
}
