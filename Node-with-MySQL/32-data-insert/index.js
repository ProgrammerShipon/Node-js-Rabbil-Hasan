var mysql = require('mysql');

var DataBaseConnectionConfig = { host: "localhost",  user: "root", password: "", database: "rabbil_school" }

var con = mysql.createConnection(DataBaseConnectionConfig);
con.connect(function(err) {
   if (err) {
      consol.log('Connection Fail.')
   } else {
      console.log('Connection Success.')
      InsertData(con);
   }
});

// Data Insert 
function InsertData() {
   let SQLQuery = "INSERT INTO `students_lists`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Hossen','04','10','01765037372','Pabna')";
   con.query(SQLQuery, function(err) {
      if(err) {
         console.log('Data insert fail..');
      } else {
         console.log('Data insert Success');
      };
   });
};