import express from 'express';
import serverRenderMiddleware from './renderMiddleWare';

export const app = express();

app.use(express.static('dist'));
app.get('*', serverRenderMiddleware);
