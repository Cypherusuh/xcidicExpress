import { User } from '../models/userModel';
import * as bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10

export const getAllUserService = async (page: number, pageSize: number): Promise<any> => {
    try {
      const users = await User.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
  
      return users;
    } catch (error) {
      throw new Error('Error fetching users');
    }
};

export const createUserService = async (name: string, email: string, password: string): Promise<any> => {
  try {
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const newUser = await User.create({
          name,
          email,
          password: hashedPassword,
      });
      return newUser;
  } catch (error) {
      throw new Error('Error creating user');
  }
};
