const express = require('express');

const projectRouter = require('./projects/project-router');

const server = express()

server.use(express.json())
server.use('/', projectRouter)

module.exports = server
