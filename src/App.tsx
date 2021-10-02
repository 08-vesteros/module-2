import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorModal from './components/Error';
import { ErrorProvider } from './contexts/error';
import { TRoute } from './modules/Header/types';
import Header from './modules/Header';
import { routes } from './routes';

const App = () => (
	<div className='container'>
		<Router>
			<Header routes={routes} />

			<ErrorProvider>
				<main>
					<Switch>
						{routes.map((route: TRoute) => (
							<Route exact {...route} key={route.path} />
						))}
					</Switch>
				</main>
				<ErrorModal />
			</ErrorProvider>
		</Router>
	</div>
);

export default App;
