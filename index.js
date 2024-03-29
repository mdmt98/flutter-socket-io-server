const express = require('express');
const path = require('path');
require('dotenv').config();

// Express App
const app = express();
// http://localhost:3000/socket.io/socket.io.js


// node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');

// Public Path
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);

    console.log('Server runnig on port:', process.env.PORT);
})