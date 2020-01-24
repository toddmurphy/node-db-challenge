const db = require('../data/dbConfig');

module.exports = {
  //task helper functions to export
  getTasks,
  addTask,
  getTaskProjects
};

//get all tasks
function getTasks() {
  return db('tasks');
}

//retrieving a list of tasks.
//The list of tasks should include the project name and project description.
function getTaskProjects(id) {
  return (
    db('tasks')
      //JOIN MUST GO FIRST --> 'tasks' table is joined/connected to 'projects' table
      .join('projects', 'tasks.project_id', 'projects.id') //these linked by 'keys'
      .select('projects.name', 'projects.description') //SELECT is allowing me to chose from each 'name' & 'description' and pick whatever column and display in the order i write it
      .where('tasks.project_id', id) //conditional -> what links it??
      .first()
  );
}

//add single task
function addTask(task) {
  return db('tasks').insert(task);
}
