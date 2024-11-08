import { Request, Response } from "express";
import { createUserService, getAllUsersService } from "../services/userService";

export const getAllUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUsersService();
        res.json({
            message: 'Successfully fetched all users',
            data: users,
        });
    } catch (error: any) {
        res.status(500).json({
            message: 'Error fetching users',
            error: error.message,
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