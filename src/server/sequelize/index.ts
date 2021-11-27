import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { config } from 'dotenv';
import { Post } from '../db/models/posts/Post';
import { User } from '../db/models/users/User';

config();

const sequelizeOptions: SequelizeOptions = {
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	dialect: 'postgres',
	models: [User, Post],
};

export const sequelize = new Sequelize(sequelizeOptions);
