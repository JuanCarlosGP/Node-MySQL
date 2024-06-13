import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();

const showDatabasesQuery = `SHOW DATABASES`;

try {
  const result = await pool.query(showDatabasesQuery);
  const databases = result[0];
  console.log('Nombres de las bases de datos:', databases);
} catch (error) {
  console.error('Error al mostrar nombres de las bases de datos:', error);
}
// import mysql from 'mysql2'

// import dotenv from 'dotenv'
// dotenv.config()

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'sparkdb'
// //     host: process.env.MYSQL_HOST,
// //   user: process.env.MYSQL_USER,
// //   password: process.env.MYSQL_PASSWORD,
// //   database: process.env.MYSQL_DATABASE
// }).promise()
// const result = await pool.query('SELECT * FROM etiquetas')

// const rows = result[0]
// console.log(result)
