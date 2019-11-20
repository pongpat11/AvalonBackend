const socketIO = require('socket.io');
const lobby = require('./lobby');

module.exports = (server) => {
    const io = socketIO.listen(server);
    lobby(io);
}

