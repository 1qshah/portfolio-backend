const { test, after } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('projects are returned as json', async () => {
  await api
    .get('/api/projects')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/projects')

  const name = response.body.map(e => e.name)
  assert(name.includes('Help Trees'))
})

test('GET /projects/:id returns 404 when project not found', async () => {
 await api
    .get('/api/projects/507f1f77bcf86cd799439012')
    .expect(404)
});

after(async () => {
  await mongoose.connection.close()
})