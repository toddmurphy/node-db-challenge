exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('table_name').insert([
    { description: 'remove topsoil layer', notes: 'make sure not to ruin soil', completed: true },
    { description: 'dig hole for pool', notes: 'hole max 8ft', completed: true },
    { description: 'replace roof', notes: 'strip all old shingles first', completed: false }
  ]);
};
