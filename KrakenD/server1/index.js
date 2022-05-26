const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send([1,2,3,4,5])
})

app.get('/test', (req, res) => {
  res.send({success:1})
})


const port = 8000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})