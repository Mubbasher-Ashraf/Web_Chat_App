const express = require('express');
const socket = require('socket.io');
const http = require('http');
const router = require('./router');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const port = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) =>{
     console.log('User Connected');

     socket.on('join', ({name, room}, callback) =>{
          const {error, user} = addUser(socket.id, name, room);
          console.log(user.room);
          if(error) return callback(error);

          socket.emit('message', { user: 'admin', text: `Welcome ${user.name} to Chat Room ${user.room}`});
          socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has Join`});
          socket.join(user.room);

          callback();
     })

     socket.on('sendMessage', (message, callback) =>{
          const user = getUser(socket.id);

          io.to(user.room).emit('message', {user: user.name, text: message});
          io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
          callback();
     })

     socket.on('disconnect',() =>{
          const user = removeUser(socket.id);
          
          if(user){
               io.to(user.room).emit('message', { user : 'admin', text: `${user.name} has left.`});
          }
     })     
});

app.use(router);

server.listen(port, () =>{
     console.log(`Server running on ${port} Port`);
});