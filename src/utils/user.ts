import axiosWrap from './axios';
import { TFieldValues } from './types';

const signUp = (values: TFieldValues) =>
	axiosWrap({
		method: 'POST',
		url: '/auth/signup',
		data: values,
	});

const signIn = (values: TFieldValues) =>
	axiosWrap({
		method: 'POST',
		url: '/auth/signin',
		data: values,
	});

const getUser = () =>
	axiosWrap({
		method: 'GET',
		url: '/auth/user',
	});

const checkAuth = async () => {
	const res = await getUser();
	return res.status === 200;
};

const logOut = () =>
	axiosWrap({
		method: 'POST',
		url: '/auth/logout',
	});

export { signUp, signIn, getUser, checkAuth, logOut };
