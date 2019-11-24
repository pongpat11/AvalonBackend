const { addPlayer, removePlayer } = require('../data/playersOnlineList');
const insertRoom = require('../../routes/model/room/insertRoom');

module.exports = (io) => {
  let lobbyIo = io.of('/lobby');

  lobbyIo.on('connection', socket => {
    let { username, userId } = socket.handshake.query;
    let user = { username, id: userId };
    if (addPlayer(user)) {
      console.log(`${username} is connected!`);
    }

    socket.on('createRoom', async (room) => {
      let newRoom = {
        roomName: room.roomName,
        roomPassword: room.roomPassword,
        roomMode: room.roomMode,
        roomSize: room.roomSize,
        gamePhase: 0,
        player: [],
        mission: [],
        rejectCount: 0,
        voteCount: 0
      }
      let createdRoom = await insertRoom(newRoom);
      console.log(createdRoom);
      lobbyIo.emit('rooms', createdRoom);
    })

    socket.on('disconnect', () => {
      if (removePlayer({ id: socket.handshake.query.userId })) {
        console.log('disconnected');
      }
    })
  })
}
