const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

usersRouter.post('/', async (req, res) => {
  const { username, password, name } = req.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash
  })

  const saveUser = await user.save()
  res.json(saveUser)
})

module.exports = usersRouter