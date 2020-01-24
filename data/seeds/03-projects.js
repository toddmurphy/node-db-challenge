exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('table_name').insert([
    { name: 'Buid a house', description: 'Build a new house to move into' },
    { name: 'Renovate kitchen', description: 'Install shevles and flooring' },
    { name: 'Landscape front yard', description: 'Dig up all rocks' }
  ]);
};
