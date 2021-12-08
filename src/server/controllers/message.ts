import { Router } from 'express';
import { sequelize } from '../sequelize';

import Message from '../db/models/Message';

export const commentRouterFactory = () =>
	Router()
		.get('/comments', (req, res, next) =>
			Message.findAll()
				.then(comments => res.json(comments))
				.catch(next)
		)

		.get('/comments/:id', (req, res, next) =>
			Message.findByPk(req.params.id)
				.then(comment => (comment ? res.json(comment) : res.sendStatus(404)))
				.catch(next)
		)

		.get('/postComments/:postId', (req, res, next) =>
			sequelize
				.query(
					`WITH RECURSIVE t(parentId, id, text, "createdAt", "userName", "postId", root)
			AS (
				SELECT "parentId", id, text, "createdAt", "userName", "postId", id
				FROM "Messages"
				WHERE "parentId" IS NULL AND "postId" = ${req.params.postId}
				UNION ALL
					SELECT "parentId", "Messages".id, "Messages".text, "Messages"."createdAt", "Messages"."userName", "Messages"."postId", CASE WHEN root = "Messages".id THEN "parentId"
									ELSE root
						 END
					FROM t
					JOIN "Messages"
						ON ("parentId" = t.id)
			)
			SELECT * FROM t
			ORDER BY root, "createdAt";`
				)
				.then(comment => (comment ? res.json(comment[0]) : res.sendStatus(404)))
				.catch(next)
		)

		.post('/comments', (req, res, next) =>
			Message.create(req.body)
				.then(comment => res.json(comment))
				.catch(() => {
					res.status(500);
					res.json({ reason: 'Something went wrong 🤪' });
					next();
				})
		);
