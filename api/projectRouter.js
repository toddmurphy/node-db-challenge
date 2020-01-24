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

//get --> single project by 'id'
router.get('/:id', (req, res) => {
  const projectID = req.params.id;

  Projects.getProjectByID(projectID)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(401).json({ message: 'Sorry, that project id not returned' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, single project by that id not returned from server', error });
    });
});

//delete --> remove a single project by 'id'
router.delete('/:id', (req, res) => {
  const deletedID = req.params.id;

  Projects.deleteProject(deletedID)
    .then(deletedAction => {
      if (deletedAction) {
        res.status(200).json(deletedAction);
      } else {
        res.status(401).json({ message: 'Sorry, project not deleted' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, project not deleted from server', error });
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

//put --> update a post by 'id'
router.put('/:id', (req, res) => {
  const updatedID = req.params.id;
  const updatedData = req.body;

  Projects.updateProject(updatedID, updatedData)
    .then(updatedInfo => {
      res.status(200).json(updatedInfo);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, project with that id not updated on server', error });
    });
});

module.exports = router;
