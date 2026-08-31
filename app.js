require('dotenv').config()
const express = require('express')


const path = require('path');

const Project = require('./models/Project')

const app = express()

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/api/projects', async (request, response) => {
  try {
    const projects = await Project.find({})
    response.json(projects)
  } catch (error) {
    return response.status(400).json({ message: 'Unable to retrieve data' });
  }
})

app.get('/api/projects/:id', async (request, response) => {
  try {
    const project = await Project.findById(request.params.id)
    if (!project) {
      return response.status(404).json({ message: "Project not found" });
    }

    response.json(project)
  } catch (error) {
    return response.status(400).json({ message: 'Unable to retrieve data' });
  }
})

module.exports = app