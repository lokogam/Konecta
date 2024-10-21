// src/models/sale.js
import connection from '../config/db.js';

export const Sale = {
  create: (saleData) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO sales (product, requested_amount, franchise, rate, created_by) VALUES (?, ?, ?, ?, ?)';
      connection.query(query, [saleData.product, saleData.requested_amount, saleData.franchise, saleData.rate, saleData.created_by], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },

  findAll: (userId = null) => {
    return new Promise((resolve, reject) => {
      let query = `
        SELECT s.*, u.name AS user_name 
        FROM sales s 
        JOIN users u ON s.created_by = u.id
      `;

      if (userId) {
        query += ' WHERE s.created_by = ?';
      }

      connection.query(query, userId ? [userId] : [], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },

  findByPk: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM sales WHERE id = ?';
      connection.query(query, [id], (error, results) => {
        if (error) reject(error);
        if (results.length === 0) {
          return resolve(null); // Retornar null si no se encuentra la venta
        }
        resolve(results[0]); // Retornar el primer resultado
      });
    });
  },

  update: (id, saleData) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE sales SET product = ?, requested_amount = ?, franchise = ?, rate = ? WHERE id = ?';
      connection.query(query, [saleData.product, saleData.requested_amount, saleData.franchise, saleData.rate, id], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM sales WHERE id = ?';
      connection.query(query, [id], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }
};
