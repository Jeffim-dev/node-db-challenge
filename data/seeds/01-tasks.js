exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      description: "description for task-a",
      note: "note for taks-a",
      task_completed: "false",      
    },
    {
      description: "description for task-b",
      note: "note for taks-b",
      task_completed: "false",      
    },
    {
      description: "description for task-c",
      note: "note for taks-b",
      task_completed: "false",      
    },
  ]);
};
