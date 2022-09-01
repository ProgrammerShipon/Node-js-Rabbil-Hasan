 
/**
 * Data Delete :
 *  FindOne() method to delete one
 *  Find() method to delete many
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
      // DeleteOneItems(myMongoClinets);
      // DeleteAllData(myMongoClinets);
      // FindOneWithOutCondition(myMongoClinets);
      // FindOneWithCondition(myMongoClinets);
      // FindAllData(myMongoClinets);
      // FindAllDataLimit (myMongoClinets);
      UpdateMyDate (myMongoClinets)
   }
})

/*
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
*/

/*
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
*/

/*
function DeleteAllData(myMongoClinets) {
   var myDataBase = myMongoClinets.db('Rabbil_School');
   var myCollection = myDataBase.collection('studen ts');

   myCollection.deleteMany(function(err, resulObj) {
      if (err) {
         console.log('Delete Fail..');
      } else {
         console.log(resulObj.deletedCount + " Item Deleted");
      }
   })
}
*/

/*
function FindOneWithOutCondition(myMongoClinets) {
   var myDataBase = myMongoClinets.db('Rabbil_School');
   var myCollection = myDataBase.collection('students');

   var findObj = {};

   myCollection.findOne(findObj, function(err, result) {
      console.log(result);
   })
}
*/

/*
function FindOneWithCondition(myMongoClinets) {
   var myDataBase = myMongoClinets.db('Rabbil_School');
   var myCollection = myDataBase.collection('students');

   var findObj = {Roll: "02"};

   myCollection.findOne(findObj, function(err, result) {
      console.log(result);
   })
}
*/

/*
function FindAllData(myMongoClinets) {
   var myDataBase = myMongoClinets.db('Rabbil_School');
   var myCollection = myDataBase.collection('students');
   
   myCollection.find().toArray(function(err, result) {
      console.log(result);
   });
};
*/

/*
function FindAllDataByQuery (myMongoClinets) {
   const MyDataBase = myMongoClinets.db('Rabbil_School');
   const myCollection = MyDataBase.collection('students');

   // const Query = { City: 'Pabna'};
   const Query = { Roll: '01', City: 'Rajshahi'};

   myCollection.find(Query).toArray(function (error, result) {
      console.log(result);
   })
}
*/

/*
function FindAllDataLimit (myMongoClinets) {
   const MyDataBase = myMongoClinets.db('Rabbil_School');
   const myCollection = MyDataBase.collection('students');

   myCollection
      .find()
      .limit(10)
      .toArray(function (error, result) {
         console.log(result);
   });
}
*/

function UpdateMyDate (myMongoClinets) {
   const MyDataBase = myMongoClinets.db('Rabbil_School');
   const myCollection = MyDataBase.collection('students');

   var MyQuery = { Roll : '03'};
   var MyNewValues = {$set: { Name:'Roshid', City: 'Dhalarchar'}};

   myCollection
      .updateOne(MyQuery, MyNewValues, function (error, result) {
         console.log(result);
      }
   );
}


