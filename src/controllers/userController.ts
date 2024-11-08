import { Request, Response } from "express";
import { createUserService, getAllUserService } from "../services/userService";
import { verifyToken } from "../services/authService";

export const getAllUser = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1; 
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    try {
        const users = await getAllUserService(page, pageSize);
        res.json({
            page,
            pageSize,
            data: users,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const postUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await createUserService(name, email, password);
        res.status(201).json({
            message: 'User created successfully',
            data: newUser,
        });
    } catch (error: any) {
        res.status(500).json({
            message: 'Error creating user',
            error: error.message,
        });
    }
}

export const getProfile = (req: Request, res: Response): void => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from header

    if (!token) {
        res.status(401).json({
            message: 'Unauthorized: No token provided',
        });
        return;
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        res.status(401).json({
            message: 'Unauthorized: Invalid token',
        });
        return;
    }

    res.json({
        message: 'Profile fetched successfully',
        user: decoded,
    });
};
