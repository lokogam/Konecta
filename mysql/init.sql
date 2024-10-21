CREATE DATABASE IF NOT EXISTS bank_db;

USE bank_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('Administrador', 'Asesor') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product ENUM('Credito de Consumo', 'Libranza Libre Inversión', 'Tarjeta de Credito') NOT NULL,
  requested_amount DECIMAL(10,2) NOT NULL,
  franchise ENUM('AMEX', 'VISA', 'MASTERCARD'),
  rate DECIMAL(4,2),
  created_by INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

ALTER TABLE sales MODIFY COLUMN product ENUM('Credito de Consumo', 'Libranza Libre Inversión', 'Tarjeta de Credito');


-- Inserción de usuarios
INSERT INTO users (name, email, password, role) VALUES
('Carlos Mendoza', 'carlos.mendoza@bank.com', '$2a$10$kLirYD8GvDeUSnaqR0Q7f.eWvlSHAWK5O9p1u0gDE3nOfiFDQ0UQe', 'Administrador'),
('Ana Lopez', 'ana.lopez@bank.com', '$2a$10$kLirYD8GvDeUSnaqR0Q7f.eWvlSHAWK5O9p1u0gDE3nOfiFDQ0UQe', 'Asesor'),
('Juan Perez', 'juan.perez@bank.com', '$2a$10$kLirYD8GvDeUSnaqR0Q7f.eWvlSHAWK5O9p1u0gDE3nOfiFDQ0UQe', 'Asesor');

-- Inserción de productos/ventas
INSERT INTO sales (product, requested_amount, franchise, rate, created_by) VALUES
('Credito de Consumo', 5000.00, 'VISA', 1.5, 2),
('Libranza Libre Inversión', 10000.00, 'MASTERCARD', 2.1, 3),  -- Con acento
('Tarjeta de Credito', 1500.00, 'AMEX', 3.2, 2);


