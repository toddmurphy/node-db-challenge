const db = require('../data/dbConfig');

module.exports = {
  //project helper functions to export
  getProjects,
  addProject,
  getProjectByID,
  deleteProject,
  updateProject
};

//get all projects
function getProjects() {
  return db('projects');
}

//get single project by 'id'
function getProjectByID(id) {
  return db('projects').where('id', id);
}

//delete single project by 'id'
function deleteProject(id) {
  return db('projects')
    .where('id', id)
    .del();
}

//add single project
function addProject(project) {
  return db('projects').insert(project);
}

//update single project by 'id
function updateProject(id, updated) {
  return db('projects')
    .where('id', id)
    .update(updated)
    .then(() => {
      return getProjectByID(id)
        .where('id', id)
        .first();
    });
}
