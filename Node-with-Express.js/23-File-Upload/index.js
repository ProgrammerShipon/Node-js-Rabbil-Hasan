const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const multerFn = multer();
app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
  function (req, file, callBack) {   // destination
    callBack(null, file('./uploads'));
  },
  function (req, file, callBack) {
    callBack(null, file.originalname);
  }
});

const upload = multer({storage: storage}).single('myfile');

app.post('/', function (req, res) {
  upload (req, res, function (err) {
    if (err) {
      return res.end('Error Uploading file');
    } else {
      res.end('File is uploaded successfull !');
    }
  })
})


app.listen(2020, function () {
  console.log('Server Run Success');
})

