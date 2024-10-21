import { body } from 'express-validator';
import { User } from '../models/user.js';

export const userValidationRules = () => {
  return [
    body('name')
      .isString()
      .notEmpty()
      .withMessage('Name is required'),
    body('email')
      .isEmail()
      .withMessage('Email is required and must be valid')
      .custom(async (value) => {
        const userExists = await User.findOne({ where: { email: value } });
        if (userExists) {
          throw new Error('Email already in use');
        }
      }),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
    body('role')
      .isIn(['Administrador', 'Asesor'])
      .withMessage('Role must be either Administrador or Asesor'),
  ];
};
