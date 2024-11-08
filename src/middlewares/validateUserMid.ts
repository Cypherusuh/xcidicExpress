import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const userSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name must be a string',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'string.base': 'Password must be a string',
    'any.required': 'Password is required',
  }),
});

export const validateUser = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = userSchema.validate(req.body, { abortEarly: false }); 
  if (error) {
    res.status(400).json({ errors: error.details });
  }
  next();
};
