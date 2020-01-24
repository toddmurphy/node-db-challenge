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

//add single task
function addTask(task) {
  return db('tasks').insert(task);
}
