const socketIO = require('socket.io');
const lobby = require('./lobby');
const room = require('./room');

module.exports = (server) => {
    const io = socketIO.listen(server);
    lobby(io);
    room(io);
}

