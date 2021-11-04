import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import WarnModal from './components/Warn';
import { TRoute } from './modules/Header/types';
import Header from './modules/Header';
import { loggedInMenu, loggedOutMenu, routes } from './routes';
import useTypedSelector from './store/selectors/typedSelector';
import { LoadStatus } from './store/types';
import { fetchUser } from './store/dispatchers/user';
import { checkOnline } from './utils/checkOnline';

const App = () => {
	const { status } = useTypedSelector(state => state.user);
	const dispatch = useDispatch();
	const isLoading = status === LoadStatus.PENDING;
	const isOnline = checkOnline();

	useEffect(() => {
		dispatch(fetchUser());
	}, [LoadStatus.PENDING]);

	const menu = status === LoadStatus.SUCCESS ? loggedInMenu : loggedOutMenu;

	return (
		<div className='container'>
			{isOnline && isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<Header routes={menu} />

					<main>
						<Switch>
							{routes.map((route: TRoute) => (
								<Route exact {...route} key={route.path} />
							))}
							<Route render={() => <Redirect to='/' />} />
						</Switch>
					</main>
					<WarnModal />
				</>
			)}
		</div>
	);
};

export default App;
