import { Request, Response } from 'express';
import { loginUserService } from '../services/authService';

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const { token, user } = await loginUserService(email, password);
        res.json({
            message: 'Login successful',
            token,
            user,
        });
    } catch (error) {
        res.status(401).json({
            message: 'Invalid credentials',
        });
    }
};

