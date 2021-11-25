'use strict';

const express = require('express');

//creates and instance that creates port, listens to queries, 
//basically to communicate with the server.
const server = express();

//when we use a cloud platform like heroku, the environment variable
// called PORT would be set to to the platform that the server provides
// to our app.

const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => res.end("Hello!"));
server.listen(PORT, () => console.log(`FBeamer Bot Service running on Port ${PORT}`));