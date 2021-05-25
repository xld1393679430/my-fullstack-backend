const mongoose = require('mongoose')

const shopeeChatVersionSchema = new mongoose.Schema({
  version: Number
})

shopeeChatVersionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('ShopeeChatVersion', shopeeChatVersionSchema)
