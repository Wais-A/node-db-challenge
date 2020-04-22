/* eslint-disable linebreak-style */
const express = require('express');

const server = express();
const projects = require('./api/projects');
const tasks = require('./api/tasks');
const resources = require('./api/resources');

server.use(express.json());
server.use('/api/projects', projects);
server.use('/api/tasks', tasks);
server.use('/api/resources', resources);

module.exports = server;
