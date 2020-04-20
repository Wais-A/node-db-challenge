const express = require('express');
const server = express();
const projects = require('./api/project-model');

server.use(express.json());
server.use('/api/projects', projects);

module.exports = server;