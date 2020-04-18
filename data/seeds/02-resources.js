exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      resource_name: "resource-a",
      description: "description for resource-a",
    },
    {
      resource_name: "resource-b",
      description: "description for resource-b",
    },
    {
      resource_name: "resource-c",
      description: "description for resource-c",
    },
  
  ]);
};