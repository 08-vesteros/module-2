import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
// eslint-disable-next-line
import { StaticRouterContext } from 'react-router';
import { Provider } from 'react-redux';
import App from '../App';
import { LoadStatus } from '../store/types';
import { initialState } from '../store/getInitialState';
import getStore from '../store';

const getHtml = (reactHtml: string, reduxState = {}) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="manifest" href="manifest.json" />
        <title>Mega T Rex Game</title>
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

	const reactHtml = renderToString(
		<Provider store={store}>
			<StaticRouter context={context} location={location}>
				<App />
			</StaticRouter>
		</Provider>
	);

	const reduxState = store.getState();

	if (reduxState.user.status === LoadStatus.PENDING) {
		reduxState.user.status = LoadStatus.ERROR;
	}

	if (context.url) {
		res.writeHead(301, {
			Location: context.url,
		});
		return;
	}

	res.status(context.statusCode || 200).send(getHtml(reactHtml, reduxState));
};
