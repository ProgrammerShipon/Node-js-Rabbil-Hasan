
/**
 * Data Delete :
 *  deleteOne() method to delete one
 *  deleteMany() method to delete many
 */


var mongodbClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://Rabbil_Demo:Btk-SCN2zsA9P-i@cluster0.krol4pa.mongodb.net/?retryWrites=true&w=majority";

var config = {useUnifiedTopology: true};

mongodbClient.connect(URL, config, function(err, myMongoClinets) {
   if (err) {
      console.log('Connection Fail..');
   } else {
      console.log('Connection Success..');
      // InsertDatas(myMongoClinets);
      DeleteOneItems(myMongoClinets);
   }
})

function InsertDatas(myMongoClinets) {
   var MyDataBase = myMongoClinets.db('Rabbil_School');
   var myCollection = MyDataBase.collection('students');

   var MyData = {Name:"Raju", Roll:"01", Class:"Seven", City:"Rajbari"};

   myCollection.insertOne(MyData, function(err) {
      if(err) {
         console.log("Data Insert Fail..");
      } else {
         console.log("Data Insert Success..");
      }
   })
}

function DeleteOneItems(myMongoClinets) {
   var myDataBase = myMongoClinets.db('Rabbil_School');
   var myCollection = myDataBase.collection('students');
   
   var deleteData = {Name:"Rabbil"};

   myCollection.deleteOne(deleteData, function(err) {
      if (err) {
         console.log('Data Delete Fail..');
      } else {
         console.log('Data Delete Success..')
      }
   })
}
