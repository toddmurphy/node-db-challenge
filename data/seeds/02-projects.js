exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('projects').insert([
    { name: 'Buid a house', description: 'Build a new house to move into', completed: true },
    { name: 'Renovate kitchen', description: 'Install shevles and flooring', completed: true },
    { name: 'Landscape front yard', description: 'Dig up all rocks', completed: true }
  ]);
};
