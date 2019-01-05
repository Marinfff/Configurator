var mysql = require('mysql');

var con = mysql.createConnection({
    host: '92.115.100.19',
  user: 'root',
  password: '',
  database: 'todo',
  port: '8889'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});