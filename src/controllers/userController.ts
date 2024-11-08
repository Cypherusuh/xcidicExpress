import { Request, Response } from "express";

export const getAllUser = (req: Request, res: Response) => {
    res.json({
        message: 'test',
    });
};

export const postUser = (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    res.json({
        message: `${name}, ${email}, ${password}`
    })
}