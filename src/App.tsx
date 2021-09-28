import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { routes } from './routes';
import { TRoute } from './routes/types';

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
