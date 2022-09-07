console.clear()
const { writeFileSync } = require('fs')
const express = require('express')
const multer = require('multer')
const cors = require('cors')

const app = express()
const multerFn = multer()
app.use(cors())
app.use(express.json())

app.post('/', multerFn.single('image'), function (req, res) {
  writeFileSync('./uploads/' + req.file.originalname, req.file.buffer)
  console.log(req.file);
  res.end('Hello')
})

app.listen(1000, function () {
  console.log('Server Run Success')
})