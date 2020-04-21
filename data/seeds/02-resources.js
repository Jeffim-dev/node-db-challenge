exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      resource_name: "resource-a",
      resource_description: "description for resource-a",
    },
    {
      resource_name: "resource-b",
      resource_description: "description for resource-b",
    },
    {
      resource_name: "resource-c",
      resource_description: "description for resource-c",
    },
  
  ]);
};