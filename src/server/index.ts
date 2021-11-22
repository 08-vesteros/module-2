import express from 'express';
import serverRenderMiddleware from './renderMiddleWare';
import { sequelize } from './sequelize';

const app = express();
const port = process.env.PORT || 3000;

const sequelizeSync = async () => {
	try {
		await sequelize.sync({ alter: true });
		console.log('Connected to the db');
	} catch (error) {
		console.error('Unable to connect to the db', error);
	}
};

app.use(express.static('dist'));
app.get('*', serverRenderMiddleware);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Listening on port ${port}`);
	sequelizeSync();
});
