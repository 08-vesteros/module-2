import express from 'express';
import serverRenderMiddleware from './renderMiddleWare';
import { commentRouterFactory } from './controllers/message';
import { postRouterFactory } from './controllers/post';

const app = express();

app.use(express.json());

app.use(commentRouterFactory());
app.use(postRouterFactory());

app.use(express.static('dist'));
app.get('*', serverRenderMiddleware);

export default app;
