import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/global';
import { registerServiceWorker } from './serviceWorkerRegistration';
import { RootState } from './store/types';
import getStore from './store';

declare global {
	interface Window {
		__INITIAL_STATE__?: RootState;
	}
}
// eslint-disable-next-line no-underscore-dangle
const store = getStore(window.__INITIAL_STATE__!);
// eslint-disable-next-line no-underscore-dangle
delete window.__INITIAL_STATE__;

hydrate(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
