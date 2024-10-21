// src/routes/userRoutes.js
import express from 'express';
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from '../controllers/userController.js';
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware.js';
import { userValidationRules } from '../validators/userValidator.js'; // Importar las reglas de validación
import { validate } from '../middlewares/validate.js'; // Importar el middleware de validación

const router = express.Router();

// Crear usuario con validación
router.post('/', authenticateToken, authorizeAdmin, userValidationRules(), validate, createUser);

// Obtener usuarios con autenticación y autorización
router.get('/', authenticateToken, authorizeAdmin, getUsers);

// Actualizar usuario con validación
router.put('/:id', authenticateToken, authorizeAdmin, userValidationRules(), validate, updateUser);

// Eliminar usuario
router.delete('/:id', authenticateToken, authorizeAdmin, deleteUser);

export default router;
