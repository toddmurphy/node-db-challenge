const express = require('express');
//import task model here
const Tasks = require('../tasks/task-model');

const router = express.Router();

//get --> all tasks
router.get('/', (req, res) => {
  Tasks.getTasks()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no tasks returned from the server', error });
    });
});

//get tasks --> include 'project name' AND 'project description'
router.get('/description', (req, res) => {
  Tasks.getTaskProjects()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no tasks with project name and project description returned from server', error });
    });
});

//post --> create new task
router.post('/', (req, res) => {
  const taskData = req.body;

  Tasks.addTask(taskData)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no new tasks created on the server', error });
    });
});

module.exports = router;
