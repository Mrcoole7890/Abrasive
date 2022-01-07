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
const USER_ATTEMPTED_TO_JOIN_TWICE = function(user) { return user.username + " attempted to log in twice!"; };
const USER_JOINED_STRING = function(user) { return user.username + " joined!"; };

server.listen(3000);

players = []; 

io.on(CONNECTION, socket => {    
    console.log(USER_CONNECTION);
    socket.on(NEW_USER, newUser => {
        if (players.lastIndexOf(newUser.username) != -1){
            socket.emit(USER_EXISTS, newUser); // I may want to return the id of the socket already connected.
            console.log(USER_ATTEMPTED_TO_JOIN_TWICE(newUser));
        } else if (newUser.username == "") {
            socket.emit(EMPTY_STRING_SUBMITTED, "");
            console.log(EMPTY_ALERT);
        } else {
            players.push(newUser.username);
            console.log(USER_JOINED_STRING(newUser));
        }
    });

    socket.on(DISCONNECTION, socket => {
        console.log(HE_DISCONNECTED);
    });
});