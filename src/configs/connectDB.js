import mysql from "mysql2";
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'basicnodejs'
  });
  
  // simple query
//   connection.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       //console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );
export default connection  