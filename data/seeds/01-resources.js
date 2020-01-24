exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('resources').insert([
    { name: 'Lawn mover', description: 'use ride along to save time' },
    { name: 'Snow blower', description: 'put away for the summer' },
    { name: 'Rake', description: 'grade rocks smooth' }
  ]);
};
