const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send([1,2,3,4,5])
})

app.get('/test', (req, res) => {
  res.send({success:1})
})

app.get('/chain1/:id', (req, res) => {
  const destination_id = req.params.id
  console.log(destination_id)
  res.send({success:1,destination_id:destination_id})
})
app.get('/chain2/:destination_id', (req, res) => {
  const destination_id = req.params.destination_id
  console.log(destination_id)
  res.send({success:1,destination_id:destination_id})
})

const port = 8000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})