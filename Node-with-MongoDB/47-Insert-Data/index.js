
var mongodbClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://Rabbil_Demo:Btk-SCN2zsA9P-i@cluster0.krol4pa.mongodb.net/?retryWrites=true&w=majority";

var config = {useUnifiedTopology: true};

mongodbClient.connect(URL, config, function(err, myMongoClinets) {
   if (err) {
      console.log('Connection Fail..');
   } else {
      console.log('Connection Success..');
      InsertDatas(myMongoClinets);
   }
})

function InsertDatas(myMongoClinets) {
   var MyDataBase = myMongoClinets.db('Rabbil_School');
   var myCollection = MyDataBase.collection('students');

   var MyData = {Name:"Shila", Roll:"03", Class:"Seven", City:"Rajbari"};

   myCollection.insertOne(MyData, function(err) {
      if(err) {
         console.log("Data Insert Fail..");
      } else {
         console.log("Data Insert Success..");
      }
   })
}

