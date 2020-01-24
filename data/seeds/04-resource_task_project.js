exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('resource_task_project').insert([{ task_id: 1 }, { resource_id: 2 }, { project_id: 3 }]);
};
