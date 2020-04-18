

exports.up = function(knex) {
  return knex.schema
    .createTable("tasks", tbl => {
      tbl.increments("id")
      tbl.text("description").notNullable()
      tbl.text("note")
      tbl.text("task_completed").defaultTo("false")
    })
    .createTable("resources", tbl => {
      tbl.increments("id")
      tbl.text("resource_name").notNullable().unique()
      tbl.text("description")
    })
    .createTable("projects", tbl => {
      tbl.increments("id")
      tbl.text("project_name").notNullable()
      tbl.text("description")
      tbl.text("project_completed").defaultTo("false")
      tbl.integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tasks")
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    }) 
    .createTable("projects_resources", tbl => {
      tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.primary(['project_id', "resource_id"])
    })
};

exports.down = function(knex) {
  return knex.schema
          .dropTableIfExists("projects_resources")
          .dropTableIfExists("projects")
          .dropTableIfExists("resources")
          .dropTableIfExists("tasks")
  
};

