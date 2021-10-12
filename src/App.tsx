import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import WarnModal from './components/Warn';
import { WarnProvider } from './contexts/warn';
import { TRoute } from './modules/Header/types';
import Header from './modules/Header';
import { loggedInRoutes, loggedOutRoutes } from './routes';
import useUser from './contexts/user';
import { checkOnline } from './utils/checkOnline';

const App = () => {
	const { isLoggedIn, isLoading, getAndSetUser } = useUser();
	const isOnline = checkOnline();

	useEffect(() => {
		getAndSetUser();
	}, [isLoggedIn]);

	const routes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

	return (
		<div className='container'>
			{isOnline && isLoading ? (
				<p>Loading...</p>
			) : (
				<Router>
					<Header routes={routes} />

					<WarnProvider>
						<main>
							<Switch>
								{routes.map((route: TRoute) => (
									<Route exact {...route} key={route.path} />
								))}
								<Route render={() => <Redirect to='/' />} />
							</Switch>
						</main>
						<WarnModal />
					</WarnProvider>
				</Router>
			)}
		</div>
	);
};

export default App;
