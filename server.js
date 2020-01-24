const express = require('express');
//import projects,resources,task routers here
const projectRouter = require('./api/projectRouter');
const resourceRouter = require('./api/resourceRouter');
const taskRouter = require('./api/taskRouter');

const server = express();

server.use(express.json());

//add projects, resources,task routes
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

//initial get to make sure server api running
server.get('/', (req, res) => {
  res.send(`<h2>Sprint challenge api project working</h2>`);
});

module.exports = server;
