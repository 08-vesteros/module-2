import { Router } from 'express';
import { Sequelize } from 'sequelize';
import Message from '../db/models/Message';
import Post from '../db/models/Post';

export const postRouterFactory = () =>
	Router()
		.get('/posts', (req, res, next) =>
			Post.findAll({
				attributes: [
					'id',
					'topic',
					'userName',
					'userId',
					'createdAt',
					[Sequelize.fn('COUNT', Sequelize.col('messages.postId')), 'repliesCount'],
				],
				include: [{ model: Message, attributes: [] }],
				group: ['Post.id'],
				order: [['createdAt', 'DESC']],
			})
				.then(posts => res.json(posts))
				.catch(next)
		)

		.get('/posts/:id', (req, res, next) =>
			Post.findByPk(req.params.id)
				.then(post => (post ? res.json(post) : res.sendStatus(404)))
				.catch(next)
		)

		.post('/posts', (req, res, next) =>
			Post.create(req.body)
				.then(post => res.json(post))
				.catch(next)
		);
