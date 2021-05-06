const shopeeRouter = require('express').Router()
const request = require('request')

// function getContentDisposition(fileName, fileType) {
//   return `attachment; filename=${encodeURIComponent(fileName)}.${fileType}; filename*=utf-8''${encodeURIComponent(fileName)}.${fileType};`
// }

shopeeRouter.get('/login', (req, res, next) => {
  const url = req.query.url
  const fileName = req.query.fileName
  request.get({ url, encoding: null }, (error, response, body) => {
    if (error) {
      next(error)
      return
    }
    // const fileType = response.headers['content-type'].split('/')[1]
    // res.setHeader('Content-disposition', getContentDisposition(fileName, fileType))
    res.setHeader('Content-type', response.headers['content-type'])
    console.log(url, fileName, body)
    res.send(body)
  })
})

module.exports = shopeeRouter