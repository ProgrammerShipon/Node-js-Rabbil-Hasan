
var mongodbClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://Rabbil_Demo:Btk-SCN2zsA9P-i@cluster0.krol4pa.mongodb.net/?retryWrites=true&w=majority";

var config = {useUnifiedTopology: true};

mongodbClient.connect(URL, config, function(err) {
   if (err) {
      console.log('Connection Fail..');
   } else {
      console.log('Connection Success..');
   }
})

