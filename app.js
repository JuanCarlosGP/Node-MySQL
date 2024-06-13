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

const insertEtiquetasQuery = `INSERT INTO etiquetas (Nombre_Etiqueta) VALUES
('Programación'),
('Ventas'),
('Marketing'),
('Finanzas'),
('Diseño'),
('Idiomas'),
('Emprendimiento'),
('Negocios'),
('Redes Sociales'),
('Videojuegos'),
('Ciencia'),
('Tecnología'),
('Arte'),
('Música'),
('Deportes'),
('Salud'),
('Moda'),
('Viajes'),
('Cine'),
('Literatura'),
('Historia'),
('Política'),
('Filosofía'),
('Religión'),
('Psicología'),
('Sociología'),
('Economía'),
('Derecho');`;

const insertTiposUsuariosQuery = `INSERT INTO tipos_usuarios (Nombre_Tipo) VALUES ('Emprendedor'), ('Autodidacta'), ('Ambos');`;

async function runQueries() {
  try {
    await pool.query(insertEtiquetasQuery);
    await pool.query(insertTiposUsuariosQuery);
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}

runQueries();

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
