// src/app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { checkDbConnection } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import bcrypt from 'bcryptjs'; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/sales', salesRoutes);

app.get('/api/db-status', async (req, res) => {
  try {
    const message = await checkDbConnection();
    return res.status(200).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'No hay conexión a la base de datos', error: error.message });
  }
});

// Endpoint para encriptar la contraseña
// http://localhost:5000/api/encrypt-password?password=password123
app.get('/api/encrypt-password', async (req, res) => {
  const { password } = req.query; // Recibe la contraseña desde los parámetros de la URL
  if (!password) {
    return res.status(400).json({ message: 'Por favor, proporciona una contraseña en el query string.' });
  }

  try {
    const salt = await bcrypt.genSalt(10); // Genera el "salt"
    const hashedPassword = await bcrypt.hash(password, salt); // Encripta la contraseña

    return res.status(200).json({ hashedPassword }); // Devuelve la contraseña encriptada
  } catch (error) {
    return res.status(500).json({ message: 'Error al encriptar la contraseña', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});