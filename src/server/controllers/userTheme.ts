import { Router } from 'express';
import { Sequelize } from 'sequelize';
import UserTheme from '../db/models/UserTheme';

export const userThemeRouterFactory = () =>
	Router()
		.post('/theme', (req, res, next) =>
			UserTheme.findOrCreate({
				where: { userId: req.body.userId },
				defaults: { theme: req.body.theme },
			})
				.then()
				.catch(next)
		)
		.get('/theme', (req, res, next) => {
			UserTheme.findAll()
				.then(item => res.json(item))
				.catch(next);
		});
