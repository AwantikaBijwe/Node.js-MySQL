var mysql = require('mysql');

let con = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'indira'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});