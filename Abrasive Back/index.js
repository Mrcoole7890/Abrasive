const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const CONNECTION = "connection";
const USER_CONNECTION = "user connected";
const NEW_USER = "newUser";
const USER_EXISTS = "Player Exists";
const DISCONNECTION = "disconnect";
const HE_DISCONNECTED = "some one disconnected";
const EMPTY_STRING_SUBMITTED = "emptyString";
const EMPTY_ALERT = "A user has attempted to submit an empty username";
const UPDATE_PLAYER_QUEUE = "Player queue was updated";
const USER_ATTEMPTED_TO_JOIN_TWICE = function(user) { return user.username + " attempted to log in twice!"; };
const USER_JOINED_STRING = function(user) { return user.username + " joined!"; };

server.listen(3000);

players = []; 

class Player {
    constructor(username) {
        this.username = username;
    }
    getUsername = () => {
        return this.username;
    }
}

class QueuedPlayer {
    constructor(username, readyStatus){
        this.player = new Player(username);
        this.readyStatus = false;
    }

    getPlayer = () => {
        return this.player;   
    }
}

io.on(CONNECTION, socket => {    
    console.log(USER_CONNECTION);
    socket.on(NEW_USER, newUser => {
        playerFound = false;
        if (players.length != 0){
            for ( i = 0; i < players.length; i++){
                console.log(players[i].getPlayer().getUsername().username);
                if (players[i].getPlayer().getUsername().username == newUser.username) playerFound = true;
            }
        }
        if (playerFound) {
            socket.emit(USER_EXISTS, newUser); // I may want to return the id of the socket already connected.
            console.log(USER_ATTEMPTED_TO_JOIN_TWICE(newUser));
        }
        else if (newUser.username == "") {
            socket.emit(EMPTY_STRING_SUBMITTED, "");
            console.log(EMPTY_ALERT);
        } else {
            players.push(new QueuedPlayer(newUser, false));
            console.log(USER_JOINED_STRING(newUser));
            socket.emit(UPDATE_PLAYER_QUEUE, players);
        }
    });

    socket.on(DISCONNECTION, socket => {
        console.log(HE_DISCONNECTED);
    });
});