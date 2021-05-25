// const mongoose = require('mongoose')
//
// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//   process.exit(1)
// }
//
// const password = process.argv[2]
//
// const url = `mongodb+srv://xld:${password}@cluster0.o3sqe.mongodb.net/note-app?retryWrites=true&w=majority`
//
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// })
//
// const noteSchema = new mongoose.Schema({
//   content: String,
//   data: Date,
//   important: Boolean,
// })
//
// noteSchema.set('toJSON', {
//   transform: (document, returnObj) => {
//     returnObj.id = returnObj._id.toString()
//     delete returnObj._id
//     delete returnObj.__v
//   }
// })
//
// const Note = mongoose.model('Note', noteSchema)
//
// // const note = new Note({
// //     content: 'HTML is easy',
// //     data: new Date(),
// //     important: true,
// // })
//
// // note.save().then(res => {
// //     console.log('note saved!')
// //     mongoose.connection.close()
// // })
//
// Note.find({}).then(result => {
//   result.forEach(() => {})
//   mongoose.connection.close()
// })
