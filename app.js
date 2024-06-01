
import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()
const result = await pool.query('SELECT * FROM etiquetas')

const rows = result[0]
console.log(result)


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
