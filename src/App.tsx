import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import WarnModal from './components/Warn';
import { TRoute } from './modules/Header/types';
import Header from './modules/Header';
import { loggedInRoutes, loggedOutRoutes } from './routes';
import useTypedSelector from './store/selectors/typedSelector';
import { LoadStatus } from './store/types';
import { fetchUser } from './store/dispatchers/user';
import { checkOnline } from './utils/checkOnline';
import Game from './pages/game';
import { postOauth } from './utils/oauth';
import useQuery from './utils/useQuery';
import { IS_DEV } from '../env';
import { LOCAL_URL, PROD_URL } from './constants';
import { darkTheme, lightTheme, Themes } from './styles/theme';
import GlobalStyles from './styles/global';
import Button from './components/Button';
import { getUserTheme, updateUserTheme } from './utils/theme';

const App = () => {
	const { status, item: user } = useTypedSelector(state => state.user);
	const dispatch = useDispatch();
	const isLoading = status === LoadStatus.PENDING;
	const isOnline = checkOnline();

	const code = useQuery().get('code');

	useEffect(() => {
		if (code) {
			postOauth({
				code,
				redirect_uri: IS_DEV ? LOCAL_URL : PROD_URL,
			}).then(response => {
				if (response.status === 200) {
					dispatch(fetchUser());
				}
			});
		}
	}, [code]);

	useEffect(() => {
		dispatch(fetchUser());
	}, [LoadStatus.PENDING]);

	const routes =
		status === LoadStatus.SUCCESS ? loggedInRoutes : loggedOutRoutes;

	const [currentTheme, setCurrentTheme] = useState<string>(Themes.LIGHT);

	const toggleTheme = () => {
		if (currentTheme === Themes.LIGHT) {
			setCurrentTheme(Themes.DARK);
		} else {
			setCurrentTheme(Themes.LIGHT);
		}
	};

	useEffect(() => {
		if (status === LoadStatus.SUCCESS) {
			const data = {
				userId: user?.id || 0,
				theme: currentTheme,
			};
			updateUserTheme(data).then();
		}
	}, [currentTheme]);

	useEffect(() => {
		if (status === LoadStatus.SUCCESS) {
			getUserTheme().then(res => {
				if (res.status === 200) {
					const userTheme = res.data.find(
						(item: { userId: number | undefined }) => item.userId === user?.id
					).theme;
					setCurrentTheme(userTheme);
				}
			});
		}
	}, [status]);

	return (
		<ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className='container'>
				{isOnline && isLoading ? (
					<p>Loading...</p>
				) : (
					<>
						<Header routes={routes} />
						<main>
							<Switch>
								{routes.map((route: TRoute) => (
									<Route exact {...route} key={route.path} />
								))}
								<Route exact component={Game} path='/game' />
								<Route render={() => <Redirect to='/' />} />
							</Switch>
							<Button content='Switch Theme' onClick={toggleTheme} />
						</main>
						<WarnModal />
					</>
				)}
			</div>
		</ThemeProvider>
	);
};

export default App;
