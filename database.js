const mysql = require('mysql');

// MySQL database connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
  });
  

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Failed to connect to the database:', error);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = connection;