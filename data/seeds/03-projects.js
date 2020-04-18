exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      project_name: "project a",
      description: "description for project-a",
      project_completed: "false",
      task_id: 1, 
    },
    {
      project_name: "project a",
      description: "description for project-a",
      project_completed: "false",
      task_id: 2, 
    },
    {
      project_name: "project a",
      description: "description for project-b",
      project_completed: "false",
      task_id: 3,
    },
    {
      project_name: "project b",
      description: "description for project-c",
      project_completed: "false",
      task_id: 1,   
    },
    {
      project_name: "project b",
      description: "description for project-c",
      project_completed: "false",
      task_id: 2,   
    },
    {
      project_name: "project c",
      description: "description for project-c",
      project_completed: "false",
      task_id: 1,   
    },
  ]);
};
