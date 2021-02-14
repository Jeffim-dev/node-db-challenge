exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      task_description: "description for task-a",
      task_note: "note for taks-a",
      task_completed: "false",  
      project_id : 1    
    },
    {
      task_description: "description for task-a",
      task_note: "note for taks-a",
      task_completed: "false",  
      project_id : 2  
    },
    {
      task_description: "description for task-a",
      task_note: "note for taks-a",
      task_completed: "false",  
      project_id : 3   
    },
    {
      task_description: "description for task-b",
      task_note: "note for taks-b",
      task_completed: "false",  
      project_id : 2    
    },
    {
      task_description: "description for task-b",
      task_note: "note for taks-b",
      task_completed: "false",  
      project_id : 3   
    },
    {
      task_description: "description for task-c",
      task_note: "note for taks-b",
      task_completed: "false", 
      project_id : 1     
    },
  ]);
};
