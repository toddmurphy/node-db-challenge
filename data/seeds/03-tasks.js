exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('tasks').insert([
    { description: 'remove topsoil layer', notes: 'make sure not to ruin soil', completed: true, project_id: 1 },
    { description: 'dig hole for pool', notes: 'hole max 8ft', completed: true, project_id: 2 },
    { description: 'replace roof', notes: 'strip all old shingles first', completed: false, project_id: 3 }
  ]);
};
