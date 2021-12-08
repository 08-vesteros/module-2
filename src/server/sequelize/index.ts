import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import Post from '../db/models/Post';
import Message from '../db/models/Message';

const sequelizeOptions: SequelizeOptions = {
	host: 'localhost',
	port: 54320,
	username: 'postgres',
	password: 'newPassword',
	database: 'my-db-name',
	dialect: 'postgres',
	models: [Message, Post],
};

export const sequelize = new Sequelize(sequelizeOptions);
