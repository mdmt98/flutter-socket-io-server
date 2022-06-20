const { io } = require('../index');

// Sockets messages/comunication
io.on('connection', client => {
    // client.on('event', data => { /* … */ });
    console.log('Client connected');

    /// .on() to listen messages
    client.on('disconnect', () => {
        console.log('Client disconnected');
    });

    client.on('message', (payload) => {
        console.log('Mensaje!!', payload);

        io.emit('message', { admin: 'Nuevo mensaje' });
    });
});
