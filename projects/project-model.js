const db = require('../data/dbConfig');

module.exports = {
  //project helper functions to export
  getProjects,
  addProject
};

//get all projects
function getProjects() {
  return db('projects');
}

//add single project
function addProject(project) {
  return db('projects').insert(project);
}
