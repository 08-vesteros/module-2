import axiosWrap from './axios';
import { TFieldValues } from './types';

const signup = (values: TFieldValues) =>
	axiosWrap({
		method: 'POST',
		url: '/auth/signup',
		data: values,
	});

const signin = (values: TFieldValues) =>
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

export { signup, signin, getUser };
