import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

const sequelizeOptions: SequelizeOptions = {
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'newPassword',
	database: 'my-db-name',
	dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);
