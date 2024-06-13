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

const insertTagsQuery = `
INSERT INTO tags (tag_name) VALUES
('Programación'),
('Ventas'),
('Marketing'),
('Finanzas'),
('Diseño'),
('Filosofía'),
('Idiomas'),
('Emprendimiento'),
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
('Religión'),
('Psicología'),
('Sociología'),
('Economía'),
('Derecho'),
('Administración'),
('Informática'),
('Educación'),
('Coches'),
('Servicios Profesional'),
('Comercio'),
('Bolsa'),
('Arte Digital'),
('Animación 3D'),
('Entornos Interactivos'),
('Organización de Eventos'),
('Audiovisuales'),
('Legal'),
('Belleza'),
('Cultura'),
('Sanitaria'),
('Área Audiovisual'),
('Periodismo'),
('Ciencias Sociales'),
('Medioambiente'),
('Automoción');
`;

async function runQuery() {
  try {
    await pool.query(insertTagsQuery);
    console.log('Datos insertados en tags correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}

runQuery();



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
