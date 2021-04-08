const express = require('express')
const cors = require('cors')
const Note = require('./models/note')

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
}
app.use(cors())
app.use(express.json())

const errorHandler = (error, request, response, next) => {
  console.log('----error.name:', error.name)
  // console.log('error.kind:', error.kind)
  // console.log('error.message:', error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

app.get('/', (req, res) => {
  res.send('home start')
})

app.get('/api/notes', (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes)
  })
})

app.get('/api/notes/:id', (req, res, next) => {
  Note.findById(req.params.id).then(note => {
    if (note) {
      res.json(note)
    } else {
      res.status(404).end()
    }
  }).catch(error => {
    next(error)
  })
})

app.delete('/api/notes/:id', (req, res, next) => {
  Note.findByIdAndRemove(req.params.id).then(() => {
    res.status(204).end()
  }).catch(error => next(error))
})

app.post('/api/notes', (req, res, next) => {
  const { content, important } = req.body || {}
  if (!content) {
    return res.status(404).json({
      error: 'miss content'
    })
  }
  const note = new Note({
    content,
    important: important || false,
    date: new Date()
  })
  note.save().then(saveNote => {
    res.json(saveNote)
  }).catch(error => {
    next(error)
  })
})

app.put('/api/notes/:id', (req, res, next) => {
  const body = req.body
  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(req.params.id, note, { new: true }).then(data => {
    res.json(data)
  }).catch(error => next(error))
})

const PORT = process.env.PORT || 3002

app.listen(PORT)