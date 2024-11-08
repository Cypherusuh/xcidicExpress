import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel'; 
import { JWT_SECRET } from '../configs/envConfig';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token!, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    if (decoded && typeof decoded !== 'string' && decoded.id && decoded.name && decoded.email) {
      req.user = decoded as User;  // Type assertion
      return next();
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  });
};
