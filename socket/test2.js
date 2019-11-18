

module.exports = (io) => {
    const lobbyIO = io.of('/test2');
    let clients2 = [];
    lobbyIO.on('connection', (socket) =>{
        clients2.push('bb')
        lobbyIO.emit('broadcast', {message: clients2});
        console.log('user connected');
        socket.on('disconnect', () => {
            clients2.pop();
            lobbyIO.emit('broadcast', {message: clients2});
            console.log('user disconnected');
        });
    });
};