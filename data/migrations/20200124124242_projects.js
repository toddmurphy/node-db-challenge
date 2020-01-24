exports.up = function(knex) {
  //resources table
  return (
    knex.schema
      .createTable('resources', tbl => {})

      //projects table
      .createTable('projects', tbl => {})

      //tasks table
      .createTable('tasks', tbl => {})
  );

  //connector table --> foreign keys
};

exports.down = function(knex) {};
