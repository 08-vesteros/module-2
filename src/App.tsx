import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Profile from './pages/profile';
import ErrorModal from './components/Error';
import { ErrorProvider } from './contexts/error';
import Forum from './pages/forum';
import Scoreboard from './pages/scoreboard';
import { TRoutes, TRoute } from './modules/Header/types';
import Header from './modules/Header';

const routes: TRoutes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/signup',
		component: Signup,
	},
	{
		path: '/signin',
		component: Signin,
	},
	{
		path: '/profile',
		component: Profile,
	},
	{
		path: '/scoreboard',
		component: Scoreboard,
	},
	{
		path: '/forum',
		component: Forum,
	},
];

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
