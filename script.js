const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
  connection.query('SELECT * FROM mytable', (err, rows) => {
    if (err) throw err;
    console.log('Data received from MySQL:\n');
    console.log(rows);
  });
  connection.end(() => {
    console.log('Connection closed.');
  });
    
  
    