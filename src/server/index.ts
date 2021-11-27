import { createServer } from 'http';
import { app } from './app';
import { sequelize } from './sequelize';

const port = process.env.PORT || 3000;

// (async () => {

sequelize
	.authenticate()
	.then(() => {
		createServer(app).listen(port, () =>
			console.log(`Server listen on port ${port}`)
		);
	})
	.catch(console.log);
// sequelize.sync({ force: true }).then(() => {
// 	createServer(app)
// 		.listen(port, () => console.log(`Server listen on port ${port}`));
// }).catch(console.log);

// })();
