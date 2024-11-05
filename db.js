const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost", // Your MySQL server host (e.g., localhost)
  user: "root", // Your MySQL username
  password: "1234", // Your MySQL password
  database: " node_api", // The database name you want to connect to
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();