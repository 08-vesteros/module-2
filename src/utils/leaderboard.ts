import axiosWrap from './axios';
import { Methods } from './types';
import { TEAM_NAME } from '../constants/index';

const getLeaderBoard = (values: any) =>
	axiosWrap({
		method: Methods.POST,
		url: `/leaderboard/${TEAM_NAME}`,
		data: values,
	});

const addUserLeaderBoard = (values: any) =>
	axiosWrap({
		method: Methods.POST,
		url: '/leaderboard',
		data: {
			data: values,
			ratingFieldName: `${TEAM_NAME}Score`,
			teamName: TEAM_NAME,
		},
	});

export { getLeaderBoard, addUserLeaderBoard };
