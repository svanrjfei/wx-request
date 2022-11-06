const express = require('express')
const app = express()
const request = require('request')
const port = 9000
let bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/', (requ, rest) => {
  http(requ.body.options).then(res => {
    rest.send(res)
  })

})

function http(data) {
  data.body = JSON.stringify(data.body)
  return new Promise((RES, REJ) => {
    request(data, (err, res, body) => {
      if (err) return REJ(err);
      RES(res);
    })
  })
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})