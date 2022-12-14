var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "indira",
    database: "college1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO student (name, class) VALUES ('Dip Shaha', 'MSc II'), ('Geet Kale', 'MSc I')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(" record inserted");
  });
});