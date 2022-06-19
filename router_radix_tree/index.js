const myArr = [
  '/',
  '/example',
  '/example/ok',
  '/hi',
  'ok/1'
]

const myObj = {}

myArr.forEach( v => {
  urlArr = v.split('/')
  console.log(urlArr)
}) 

