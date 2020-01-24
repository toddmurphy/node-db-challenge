const db = require('../data/dbConfig');

module.exports = {
  //task helper functions to export
  getTasks,
  addTask
};

//get all tasks
function getTasks() {
  return db('tasks');
}

//retrieving a list of tasks.
//The list of tasks should include the project name and project description.

//add single task
function addTask(task) {
  return db('tasks').insert(task);
}
