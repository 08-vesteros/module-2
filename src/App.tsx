import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import ErrorModal from './components/Error';
import { ErrorProvider } from './contexts/error';
import { TRoute } from './modules/Header/types';
import Header from './modules/Header';
import { loggedInRoutes, loggedOutRoutes } from './routes';
import useUser from './contexts/user';

const App = () => {
	const { user, isLoggedIn, isLoading, getAndSetUser } = useUser();

	useEffect(() => {
		getAndSetUser();
	}, [isLoggedIn]);

	const routes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

	return (
		<div className='container'>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<Router>
					<Header routes={routes} />

					<ErrorProvider>
						<main>
							<Switch>
								{routes.map((route: TRoute) => (
									<Route exact {...route} key={route.path} />
								))}
								<Route render={() => <Redirect to='/' />} />
							</Switch>

							<p>{user?.id}</p>
						</main>
						<ErrorModal />
					</ErrorProvider>
				</Router>
			)}
		</div>
	);
};

export default App;
