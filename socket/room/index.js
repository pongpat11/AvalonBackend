const findRoom = require('../../routes/model/room/findRoom');

module.exports = (io) => {
  let roomIo = io.of('/room');

  roomIo.on('connection', socket => {

    socket.on('join', async ({ roomId, player, password }, cb) => {
      const query = {
        _id: roomId
      }
      const roomData = await findRoom(query);
      if (roomData) {
        const playerIndex = roomData[0].player.findIndex(p => p.username === player.username);
        console.log(playerIndex);
        if (playerIndex > -1) {
          socket.join(roomId);
          cb({ err: null });
        } else if (roomData[0].roomPassword === password) {
          socket.join(roomId);
          console.log(`${player.username} join room #${roomId}`);
          cb({ err: null });
        }
      } else {
        console.log(`${roomId} not found`); 
        return cb({ err: 'room not found' })       
      }
    })
  
    socket.on('disconnect', () => {
      console.log('disconnect room');
    })
  })
}