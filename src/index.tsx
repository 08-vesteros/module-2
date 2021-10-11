import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './contexts/user';
import App from './App';
import GlobalStyles from './styles/global';
import { registerServiceWorker } from './serviceWorkerRegistration';

ReactDOM.render(
	<UserProvider>
		<GlobalStyles />
		<App />
	</UserProvider>,
	document.getElementById('root')
);

registerServiceWorker();
