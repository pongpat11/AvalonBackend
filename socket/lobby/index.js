const { addPlayer, removePlayer } = require('../data/playersOnlineList');
const { addRoom, getAllRoom } = require('../data/roomList');

module.exports = (io) => {
  let lobbyIo = io.of('/lobby');

  lobbyIo.on('connection', socket => {
    let { username, userId } = socket.handshake.query;
    let user = { username, id: userId };
    if (addPlayer(user)) {
      console.log(`${username} is connected!`);
    }

    socket.on('createRoom', (room) => {
      let newRoom = {
        roomName: room.roomName,
        roomPassword: room.roomPassword,
        roomMode: room.roomMode,
        roomSize: room.roomSize
      }
      let createdRoom = addRoom(newRoom);
      lobbyIo.emit('rooms', createdRoom);
    })

    socket.on('disconnect', () => {
      if (removePlayer({ id: socket.handshake.query.userId })) {
        console.log('disconnected');
      }
    })
  })
}
