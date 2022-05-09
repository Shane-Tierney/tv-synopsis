const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/seasons/:number', (request, response) => {
  const season = showdata.seasons.find((season) => { return season.number === parseInt(request.params.number) })

  return response.render('seasons', { season, 'title': showdata.title })
})

app.all('*', (require, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Application is up: http://localhost:1337')
})
