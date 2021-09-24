import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Profile from './pages/profile';
import Forum from './pages/forum';
import Scoreboard from './pages/scoreboard';

type TRoute = {
	path: string;
	component: React.FunctionComponent;
};

const routes: Array<TRoute> = [
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
	<main className='container'>
		<Router>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/signup'>Signup</Link>
				</li>
				<li>
					<Link to='/signin'>Signin</Link>
				</li>
				<li>
					<Link to='/profile'>Profile</Link>
				</li>
				<li>
					<Link to='/scoreboard'>Scoreboard</Link>
				</li>
				<li>
					<Link to='/forum'>Forum</Link>
				</li>
			</ul>

			<Switch>
				{routes.map((route: TRoute) => (
					<Route
						exact
						path={route.path}
						component={route.component}
						key={route.path}
					/>
				))}
			</Switch>
		</Router>
	</main>
);

export default App;
