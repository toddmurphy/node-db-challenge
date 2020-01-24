const express = require('express');
//import project model here
const Projects = require('../projects/project-model');

const router = express.Router();

//get--> all projects
router.get('/', (req, res) => {
  Projects.getProjects()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no projects returned from the server', error });
    });
});

//post --> create new project
router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, unable to create new project on server', error });
    });
});

module.exports = router;
