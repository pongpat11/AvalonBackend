const socketIO = require('socket.io');

module.exports = (server) => {
    const io = socketIO.listen(server);
    const test = require('./test');
    const test2 = require('./test2');
    test(io);
    test2(io);
}

