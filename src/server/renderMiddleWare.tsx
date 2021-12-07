import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { StaticRouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import App from '../App';
import { initialState } from '../store/getInitialState';
import getStore from '../store';

const getHtml = (
	reactHtml: string,
	reduxState = {},
	styles: ServerStyleSheet
) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="manifest" href="manifest.json" />
        <title>Mega T Rex Game</title>
				<link href=”emoji-mart/css/emoji-mart.css” rel=”stylesheet” type=”text/css”>
				${styles.getStyleTags()}
      </head>

      <body>
        <div id="root">${reactHtml}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
        </script>
        <script src="main.js"></script>
      </body>
    </html>
    `;

export default (req: Request, res: Response) => {
	const location = req.url;
	const context: StaticRouterContext = {};
	const store = getStore(initialState);
	const sheet = new ServerStyleSheet();

	const reactHtml = renderToString(
		<Provider store={store}>
			<StaticRouter context={context} location={location}>
				{sheet.collectStyles(<App />)}
			</StaticRouter>
		</Provider>
	);

	const reduxState = store.getState();

	if (context.url) {
		res.writeHead(301, {
			Location: context.url,
		});
		res.end();
		return;
	}

	res
		.status(context.statusCode || 200)
		.send(getHtml(reactHtml, reduxState, sheet));
};
