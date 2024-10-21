// src/routes/authRoutes.js
import express from 'express';
import { login } from '../controllers/authController.js';
import { validateCaptcha } from '../middlewares/captchaMiddleware.js';

const router = express.Router();

// router.post('/login', validateCaptcha, login);
router.post('/login', login);

export default router;