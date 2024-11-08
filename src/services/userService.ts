import { User } from '../models/userModel';

export const getAllUsersService = async (): Promise<any> => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error('Error fetching users');
    }
};

export const createUserService = async (name: string, email: string, password: string): Promise<any> => {
    try {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      return newUser;
    } catch (error) {
      throw new Error('Error creating user');
    }
};
