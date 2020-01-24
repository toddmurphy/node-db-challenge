const db = require('../data/dbConfig');

module.exports = {
  //resource helper functions to export
  getResources,
  addResource
};

//get all resources
function getResources() {
  return db.insert('resources');
}

//add a single resource
function addResource(resource) {
  return db.insert('resources').insert(resource);
}
