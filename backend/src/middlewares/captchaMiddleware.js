// src/middlewares/captchaMiddleware.js
import axios from 'axios';

export const validateCaptcha = async (req, res, next) => {
  try {
    const { captchaToken } = req.body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LdHSGcqAAAAAOdzUuYfyuEdHY3bvZsunHLjIwu2';

    // Cambia el método de verificación
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify`;

    const response = await axios.post(verificationURL, null, {
      params: {
        secret: secretKey,
        response: captchaToken,
      },
    });

    // Añade un console.log para depurar
    console.log('ReCAPTCHA response:', response.data);

    if (response.data.success) {
      next();
    } else {
      console.log('ReCAPTCHA verification failed:', response.data);
      res.status(400).json({ message: 'Invalid captcha 1' });
    }
  } catch (error) {
    console.error('Error during captcha validation:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
