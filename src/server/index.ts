import express from 'express';
import serverRenderMiddleware from './renderMiddleWare';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('dist'));
app.get('*', serverRenderMiddleware);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Listening on port ${port}`);
});
