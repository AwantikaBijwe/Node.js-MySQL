var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "indira",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    var sql = "DELETE FROM customers1 WHERE address = 'wakad'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
});