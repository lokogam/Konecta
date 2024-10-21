import connection from '../config/db.js';

export const User = {
  create: (userData) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
      connection.query(query, [userData.name, userData.email, userData.password, userData.role], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },

  findByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE email = ?';
      connection.query(query, [email], (error, results) => {
        if (error) reject(error);
        else resolve(results[0]);
      });
    });
  },

  findAll: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT id, name, email, role, created_at, updated_at FROM users';
      connection.query(query, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },

  update: (id, userData) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?';
      connection.query(query, [userData.name, userData.email, userData.role, id], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },

  findByPk: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT id, name, email, role FROM users WHERE id = ?';
      connection.query(query, [id], (error, results) => {
        if (error) reject(error);
        else resolve(results[0]);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM users WHERE id = ?';
      connection.query(query, [id], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }
};
