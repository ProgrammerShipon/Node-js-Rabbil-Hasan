
const mongodbClient = require('mongodb').MongoClient;
const URL = "mongodb+srv://Rabbil_Demo:Btk-SCN2zsA9P-i@cluster0.krol4pa.mongodb.net/?retryWrites=true&w=majority";

const config = {useUnifiedTopology: true};

mongodbClient.connect(URL, config, function(err, myMongoClinets) {
   if (err) {
      console.log('Connection Fail..');
   } else {
      console.log('Connection Success..');
      FindAllDataByProjection(myMongoClinets);
   }
})

// function FindAllDataByProjection(myMongoClinets) {
//    const myDataBase = myMongoClinets.db('Rabbil_School');
//    const myCollection = myDataBase.collection('students');

//    const ItemObj = {};
//    const ItemProjection = {projection:{Roll: ""}}

//    myCollection.find(ItemObj).toArray(function(error, result) {
//       console.log(result);
//    });
// };

/*
function FindAllDataByProjection(myMongoClinets) {
  const myDataBase = myMongoClinets.db('Rabbil_School')
  const myCollection = myDataBase.collection('students')

  const ItemObj = {}
  const ItemProjection = {projection: { Roll: '' }}

  // Array shafel
  myCollection.find(ItemObj).toArray(function (error, result) {
    console.log(
      result.map(data => {
        return data.Roll
      })
    )
  })
}
*/

function FindAllDataByProjection(myMongoClinets) {
  const myDataBase = myMongoClinets.db('Rabbil_School')
  const myCollection = myDataBase.collection('students')

  const ItemObj = {}
  const ItemProjection = { Roll: 1, City: 1 }

  myCollection
  .find(ItemObj)
  .project(ItemProjection)
  .toArray(function (error, result) {
      console.log(result)
    })
}


// mongogose 
// Person.
//   find({ occupation: /host/ }).
//   select('name occupation').