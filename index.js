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
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

const generateId = () => {
  const id = notes.length > 0 ? Math.max(...notes.map(item => item.id)) : 0
  return id + 1
}

app.get('/', (req, res) => {
  res.send('home start')
})

app.get('/api/notes', (req, res) => {
  Note.find({}).then(notes => {
    console.log(notes, 222222)
    res.json(notes)
  })
})

app.get('/api/notes/:id', (req, res, next) => {
  Note.findById(req.params.id).then(note => {
    console.log(note, 11111);
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
  Note.findByIdAndRemove(req.params.id).then(data => {
    res.status(204).end()
  }).catch(error => next(error))
})

app.post('/api/notes', (req, res) => {
  const {content, important} = req.body || {}
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
  })
})

app.put('/api/notes/:id', (req, res, next) => {
  const body = req.body
  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(req.params.id, note, {new: true}).then(data => {
    res.json(data)
  }).catch(error => next(error))
})

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})