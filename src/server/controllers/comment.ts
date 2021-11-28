import { Router } from 'express';

import Comment from '../db/models/Comment';

export const commentRouterFactory = () =>
	Router()
		.get('/comments', (req, res, next) =>
			Comment.findAll()
				.then(comments => res.json(comments))
				.catch(next)
		)

		.get('/comments/:id', (req, res, next) =>
			Comment.findByPk(req.params.id)
				.then(comment => (comment ? res.json(comment) : res.sendStatus(404)))
				.catch(next)
		)

		.post('/comments', (req, res, next) =>
			Comment.create(req.body)
				.then(comment => res.json(comment))
				.catch(next)
		);
