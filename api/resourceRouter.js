const express = require('express');
//import resource model here
const Resources = require('../resources/resource-model');

const router = express.Router();

//get --> all resources
router.get('/', (req, res) => {
  Resources.getResources()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no resources returned from server', error });
    });
});

//post --> create new resource
router.post('/', (req, res) => {
  const resourceData = req.body;

  Resources.addResource(resourceData)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json({ message: 'Sorry, no new resource added to server', error });
    });
});

module.exports = router;
