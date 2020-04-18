const express = require('express');

const db = require('./data/db-config')

const server = express();

server.use(express.json());

server.post('/api/resources', (req, res) => {
  db('resources').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('resources')
      .where({ id })
      .first()
    .then(resource => {
      res.status(201).json(resource);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/resources', async (req, res) => {
  try {
    res.json(await db('resources'))
  } catch(error) {
    res.status(500).json(error);
  };
})

server.get("/api/projects/:id/tasks", async (req, res) => {
  try {
    const projects = await db("projects as p")
        .join('tasks as t', "t.id", "p.task_id")
        .where('t.id', req.params.id)
        .select("p.*", "t.*")
      res.json(projects)
  } catch(error) {
    res.status(500).json(error);
  };
})

module.exports = server;