const db = require('../data/db-config')

function addResources(resourceData) {
  return db('resources').insert(resourceData)
}

function findResources() {
  return db('resources')
}

function addProjects(projectData) {
  return db('projects').insert(projectData)
}

function findProjects() {
  return db('projects')
}

function addTasks(taskData) {
  return db('tasks').insert(taskData) 
}

function findTasks() {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')

}

function findTaskByID(id) {
  return db("projects_resources as pr")
        .join('projects as p', "p.id", "pr.project_id")
        .join('resources as r', "r.id", "pr.resource_id")
        .join('tasks as t', "p.id", "t.project_id")
        .select("p.*", "t.*", "r.*")
        .where("p.id", id)
}

module.exports = {
  addResources,
  findResources,
  addProjects,
  findProjects,
  addTasks,
  findTasks,
  findTaskByID
}