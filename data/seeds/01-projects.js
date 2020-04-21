exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      project_name: "project a",
      project_description: "description for project-a",
      project_completed: "false",
    },
    {
      project_name: "project b",
      project_description: "description for project-b",
      project_completed: "false",
    },
    {
      project_name: "project c",
      project_description: "description for project-c",
      project_completed: "false",
    }
  ]);
};
