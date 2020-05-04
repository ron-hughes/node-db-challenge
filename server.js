const express = require('express');

const projectsRouter = require("./router/projectsRouter");
const resourcesRouter = require("./router/resourcesRouter");
const tasksRouter = require("./router/tasksRouter");

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
   res.send('<h3>business api</h3>');
 });

module.exports = server;