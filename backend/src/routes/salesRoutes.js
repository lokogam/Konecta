// src/routes/salesRoutes.js
import express from 'express';
import { createSale, getSales, updateSale, deleteSale } from '../controllers/salesController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, createSale);
router.get('/', authenticateToken, getSales);
router.put('/:id', authenticateToken, updateSale);
router.delete('/:id', authenticateToken, deleteSale);

export default router;