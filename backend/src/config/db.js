// src/config/db.js
import mysql from 'mysql2';

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'mysql',
  user: process.env.DB_USER || 'bank_user',
  password: process.env.DB_PASSWORD || 'bank_password',
  database: process.env.DB_NAME || 'bank_db',
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL como id ' + connection.threadId);
});

// Función para comprobar la conexión
export const checkDbConnection = () => {
  return new Promise((resolve, reject) => {
    connection.ping((err) => {
      if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return reject(err);
      }
      resolve('Conexión a la base de datos exitosa');
    });
  });
};

export default connection;
