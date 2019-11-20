module.exports = (io) => {
  let lobbyIo = io.of('/lobby');
  let rooms = [];
  let players = [];

  lobbyIo.on('connection', socket => {
    let { username, userId } = socket.handshake.query;
    let user = { username, userId, socketId: socket.id };
    if (players.findIndex(({ userId, socketId }) => userId === user.userId) <= -1) {
      // if user isn't in array players
      console.log(`${username} is connected`);
      players.push(user);
    }

    socket.on('disconnect', () => {
      const playerIndex = players.findIndex(({ userId }) => userId === socket.handshake.query.userId);
      if (playerIndex > -1) {
        // if user exit in array playsers
        players.pop(playerIndex);
        console.log(`disconnected`);
      }
      
    })
  })
}
