const express = require('express');
//import projects,resources,task routers here
const projectRouter = require('./api/projectRouter');
const resourceRouter = require('./api/resourceRouter');
const taskRouter = require('./api/taskRouter');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

//add projects, resources,task routes

//initial get to make sure server api running
server.get('/', (req, res) => {
  res.send(`<h2>Recipe api project working</h2>`);
});

module.exports = server;
