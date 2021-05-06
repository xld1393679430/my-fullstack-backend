const jsonpRouter = require('express').Router()

jsonpRouter.get('/', async (req, res) => {
  res.status(200).json({
    code: 200,
    data: 'success1'
  })
})

module.exports = jsonpRouter