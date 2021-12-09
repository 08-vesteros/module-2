import { Router } from 'express';
import { Model, Sequelize } from 'sequelize';
import UserTheme from '../db/models/UserTheme';

async function updateOrCreate(model: any, where: any, newItem: any) {
	// First try to find the record
	const foundItem = await model.findOne({ where });
	if (!foundItem) {
		// Item not found, create a new one
		const item = await model.create(newItem);
		return { item, created: true };
	}
	// Found an item, update it
	const item = await model.update(newItem, { where });
	return { item, created: false };
}

export const userThemeRouterFactory = () =>
	Router()
		.post('/theme', (req, res, next) =>
			updateOrCreate(
				UserTheme,
				{ userId: req.body.userId },
				{ theme: req.body.theme }
			).then(result => {
				res.json(result);
			})
		)
		.get('/theme', (req, res, next) => {
			UserTheme.findAll()
				.then(item => res.json(item))
				.catch(next);
		});
