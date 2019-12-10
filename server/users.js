const users = [];

const addUser = (id, name, room) =>{
     name = name.trim().toLowerCase();
     room = room.trim().toLowerCase();

     const checkUser = users.find((user) => user.name === name && user.room === room);

     if(checkUser)
          return {error: 'User Already exists with same name'};

     const user = {id, name, room};
     users.push(user);
     console.log(users.length);
     return { user };
}

const removeUser = (id) =>{
     const index = users.findIndex((user) => user.id === id);

     if(index !== -1)
          return users.splice(index,1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {
     addUser,
     removeUser,
     getUser,
     getUsersInRoom
}