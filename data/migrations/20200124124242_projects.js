exports.up = function(knex) {
  //resources table
  return (
    knex.schema
      .createTable('resources', tbl => {
        tbl.increments();

        tbl
          .string('name', 255)
          .unique()
          .notNullable(); //no duplicate names
        tbl.string('description', 255).notNullable();
      })
      //projects table
      .createTable('projects', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
        tbl.string('description', 255).notNullable();
        tbl.boolean('completed').defaultTo(false);
      })
      //tasks table
      .createTable('tasks', tbl => {
        tbl.increments();

        tbl.string('description', 255).notNullable();
        tbl.string('notes', 300).notNullable();
        tbl.boolean('completed').defaultTo(false);

        //task foreign key here ??
        tbl
          .integer('project_id') // i think this will link to project
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
      //connector table -- foreign keys to connect all tables together
      .createTable('resource_task_project', tbl => {
        tbl.increments();

        tbl
          .integer('task_id')
          .unsigned()
          .references('id')
          .inTable('tasks')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        tbl
          .integer('resource_id')
          .unsigned()
          .references('id')
          .inTable('resources')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        tbl
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
  );
};

exports.down = function(knex) {
  //add in reverse order as tables created
  return knex.schema
    .dropTableIfExists('resource_task_project')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources');
};
