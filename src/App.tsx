import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import WarnModal from './components/Warn';
import { TRoute } from './modules/Header/types';
import Header from './modules/Header';
import { loggedInRoutes, loggedOutRoutes } from './routes';
import useTypedSelector from './store/selectors/typedSelector';
import { LoadStatus } from './store/types';
import { fetchUser } from './store/dispatchers/user';
import Game from './pages/game';
import { checkOnline } from './utils/checkOnline';

const App = () => {
	const { status } = useTypedSelector(state => state.user);
	const dispatch = useDispatch();
	const isLoading = status === LoadStatus.PENDING;
	const isOnline = checkOnline();

	useEffect(() => {
		dispatch(fetchUser());
	}, [LoadStatus.PENDING]);

	const routes =
		status === LoadStatus.SUCCESS ? loggedInRoutes : loggedOutRoutes;

	return (
		<div className='container'>
			{isOnline && isLoading ? (
				<p>Loading...</p>
			) : (
				<Router>
					<Header routes={routes} />

					<main>
						<Switch>
							{routes.map((route: TRoute) => (
								<Route exact {...route} key={route.path} />
							))}
							<Route exact path='/game' component={Game} />
							<Route render={() => <Redirect to='/' />} />
						</Switch>
					</main>
					<WarnModal />
				</Router>
			)}
		</div>
	);
};

export default App;
