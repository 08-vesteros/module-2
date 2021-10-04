import Forum from '../pages/forum';
import Game from '../pages/game';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Scoreboard from '../pages/scoreboard';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Start from '../pages/start';
import { TRoute } from './types';

export const loggedInRoutes: Array<TRoute> = [
	{
		path: '/',
		component: Home,
	},
  {
		path: '/start',
		component: Start,
	},
	{
		path: '/game',
		component: Game,
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

export const loggedOutRoutes: Array<TRoute> = [
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
		path: '/start',
		component: Start,
	},
	{
		path: '/game',
		component: Game,
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
