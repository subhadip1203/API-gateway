const http = require('http')
const router = require('find-my-way')()



router.all('/test', (req, res, params) => {
  console.log(req.headers)
  res.end('{"message":"hello world"}')
})
router.all('/test/:userId', (req, res, params) => {
  console.log(params)
  res.end('{"message":"hello world1"}')
})


const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(3000, err => {
  if (err) throw err
  console.log('Server listening on: http://localhost:3000')
})