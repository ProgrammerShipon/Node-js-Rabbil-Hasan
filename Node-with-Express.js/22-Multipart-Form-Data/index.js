
const express = require('express')
const multer = require('multer')
const cors = require('cors')
const multerFn = multer()
const app = express()

app.use(cors())
app.use(express.json())

app.post('/', multerFn.single('name', 'age', 'city'), function (req, res) {
  let JSONData = req.body
  console.log(req.file)
  res.json(JSONData)
})

app.listen(1100, function () {
  console.log('Server Run Successs.. Port: 1100 ')
})

