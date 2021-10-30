import axiosWrap from './axios';
import { Methods } from './types';
import { TEAM_NAME } from '../constants/index';

const getLeaderBoard = (values: any) =>
	axiosWrap({
		method: Methods.POST,
		url: `/leaderboard/${TEAM_NAME}`,
		data: values,
	});

// const getLeaderBoard = (values: any) =>
// 	axiosWrap({
// 		method: Methods.POST,
// 		url: `/leaderboard/all`,
// 		data: values,
// 	});

const addUserLeaderBoard = (values: any) =>
	axiosWrap({
		method: Methods.POST,
		url: '/leaderboard',
		data: values,
	});

export { getLeaderBoard, addUserLeaderBoard };
