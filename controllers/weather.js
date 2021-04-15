const weatherRouter = require('express').Router()
const request = require('request')

// 方法一: http-proxy-middleware

// const { createProxyMiddleware } = require('http-proxy-middleware')
// weatherRouter.get('/*',
//   createProxyMiddleware({
//     target: 'http://apis.juhe.cn',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api/weather' : '/'  // 重写请求，api/解析为/
//     },
//   }),
// )

// 方法二：request
weatherRouter.get('/', async (req, res) => {
  const url = `http://apis.juhe.cn/simpleWeather/query?city=${encodeURIComponent('上海')}&key=cafff9cbfac73971b71422c9a6651664`
  request(url, (err, req, body) => {
    if(!err && req.statusCode === 200){
      res.send(body)
    }else{
      res.status(404).json({
        error: 'no data'
      })
    }
  })
})

module.exports = weatherRouter