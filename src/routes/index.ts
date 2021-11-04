import Game from '../pages/game';
import Forum from '../pages/forum';
import Profile from '../pages/profile';
import Scoreboard from '../pages/scoreboard';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Start from '../pages/start';
import { TRoute } from './types';

export const loggedInMenu: Array<TRoute> = [
	{
		path: '/',
		component: Start,
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

export const loggedOutMenu: Array<TRoute> = [
	{
		path: '/',
		component: Start,
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
		path: '/scoreboard',
		component: Scoreboard,
	},
	{
		path: '/forum',
		component: Forum,
	},
];

export const routes: Array<TRoute> = [
	{
		path: '/',
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
		path: '/signup',
		component: Signup,
	},
	{
		path: '/signin',
		component: Signin,
	},
	{
		path: '/forum',
		component: Forum,
	},
];
