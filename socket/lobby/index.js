module.exports = (io) => {
  let lobbyIo = io.of('/lobby');
  let rooms = [];
  let players = [];

  lobbyIo.on('connection', socket => {
    
    socket.on('enterLobby', player => {
      if(players.findIndex(p => p.username === player.username) <= -1 ) {
        players.push(player);
        socket.username = player.username
        console.log(`${player.username} is connected!`);
      }      
    })

    socket.on('disconnect', () => {
      console.log(`${socket.username} is disconnected`);
      let index = -1;
      for (let i = 0; i<= players.length; i++) {
        if (players[i].username === socket.username) {
          index = i;
          break;
        }
      }
      if (index > -1) {
        players.pop(index);
      }
      socket.username = null;
    })
  })
}