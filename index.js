require('dotenv').config()
const express = require('express')


const path = require('path');
const { fileURLToPath } = require('url');


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const Project = require('./models/Project')

const app = express()

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get('/api/projects', (request, response) => {
  Project.find({}).then(projects => {
    response.json(projects)
  })
})

app.get('/api/projects/:id', (request, response) => {
  Project.findById(request.params.id).then(project => {
    response.json(project)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})