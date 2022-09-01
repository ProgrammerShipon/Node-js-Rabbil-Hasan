var mysql = require('mysql');

var DataBaseConnectionConfig = {
   host: "localhost",
   user: "root",
   password: "",
   database: "rabbil_school"
}

var con = mysql.createConnection(DataBaseConnectionConfig);

con.connect(function(err) {
   if (err) {
      consol.log('Connection Fail.')
   }
   else {
      console.log('Connection Success.')
   }
})