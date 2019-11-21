const { addPlayer, removePlayer } = require('../data/playersOnlineList');

module.exports = (io) => {
  let lobbyIo = io.of('/lobby');
  let rooms = [];

  lobbyIo.on('connection', socket => {
    let { username, userId } = socket.handshake.query;
    let user = { username, id: userId };
    if (addPlayer(user)) {
      console.log(`${username} is connected!`);
    }

    socket.on('createRoom', (room) => {
      let newRoom = {
        room_id: rooms.length,
        room_name: room.roomName,
        room_password: room.roomPassword,
        room_mode: room.roomMode,
        room_max: room.roomSize
      }
      rooms.push(newRoom)
      socket.emit('rooms', rooms);
    })

    socket.on('disconnect', () => {
      
      if (removePlayer({ id: socket.handshake.query.userId })) {
        console.log('disconnected');
      }
      
    })
  })
}
