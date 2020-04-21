const express = require('express')

const projects = require('./project-model')

const router = express.Router()

router.post('/api/resources', async (req, res) => {
  const resourceData = req.body
  
  try {    
    const resource = await projects.addResources(resourceData)
    res.status(201).json(resource)
  } catch(error) {
    res.status(500).json(error);
  };
});

router.get('/api/resources', async (req, res) => {
  try {
    res.json(await projects.findResources())
  } catch(error) {
    res.status(500).json(error);
  };
})

router.post('/api/projects', (req, res) => {
  const projectData = req.body
  
  projects.addProjects(projectData)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

router.get('/api/projects', (req, res) => {
  projects.findProjects()
  .then(projects => {
    res.json(projects)
  })
  .catch(error => {
    res.status(500).json(error);
  });
})

router.post('/api/tasks', (req, res) => {
  const taskData = req.body
  
  projects.addTasks(taskData)
  .then(task => {
    res.status(201).json(task)
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

router.get('/api/tasks', (req, res) => {
  projects.findTasks()
  .then(tasks => {
    res.json(tasks)
  })
  .catch(error => {
    res.status(500).json(error);
  });
})

router.get('/api/projects/:id/tasks', (req, res) => {
  const { id } = req.params;

  projects.findTaskByID(id)
  .then(project => {
    res.json(project)
  })
  .catch(error => {
    res.status(500).json(error);
  });
})

module.exports = router