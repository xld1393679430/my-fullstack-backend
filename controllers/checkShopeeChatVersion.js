const ShopeeChatVersion = require('../models/shopeeChatVersion')
const checkShopeeChatVersionRouter = require('express').Router()

checkShopeeChatVersionRouter.get('/:version', async (request, response) => {
  const clientVersion = request.params.version
  try {
    const data = await ShopeeChatVersion.find({})
    const version = data[0].version
    response.json({
      code: 200,
      update: Number(version) >  Number(clientVersion),
      newVersion: version,
    })
  } catch (e) {
    response.json({
      code: 200,
      update: false,
      newVersion: -1
    })
  }
})

module.exports = checkShopeeChatVersionRouter
