import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import Post from '../db/models/Post';
import Comment from '../db/models/Comment';
import Theme from '../db/models/Theme';

const sequelizeOptions: SequelizeOptions = {
	host: 'localhost',
	port: 54320,
	username: 'postgres',
	password: 'newPassword',
	database: 'my-db-name',
	dialect: 'postgres',
	models: [Comment, Post, Theme],
};

export const sequelize = new Sequelize(sequelizeOptions);
