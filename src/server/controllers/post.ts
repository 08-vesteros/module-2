import { Router } from 'express';
import { Op } from 'sequelize/dist';
import Post from '../db/models/Post';
import Comment from '../db/models/Comment';

export const postRouterFactory = () =>
	Router()
		.get('/posts', (req, res, next) =>
			Post.findAll()
				.then(posts => res.json(posts))
				.catch(next)
		)

		.get('/posts/:id', (req, res, next) =>
			Post.findByPk(req.params.id, {
				include: [
					{
						model: Comment,
						as: 'comments',
						where: {
							parentId: {
								[Op.eq]: null,
							},
						},
						include: [{ all: true, nested: true }],
					},
				],
			})
				.then(post => (post ? res.json(post) : res.sendStatus(404)))
				.catch(next)
		)

		.post('/posts', (req, res, next) =>
			Post.create(req.body)
				.then(post => res.json(post))
				.catch(next)
		);
