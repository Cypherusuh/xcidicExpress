import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../configs/dbConfig';

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'User',
        tableName: 'user',
        sequelize,
        timestamps: false,
    }
);
