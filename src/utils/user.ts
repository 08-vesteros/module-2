import axiosWrap from './axios';
import { TFieldValues, Methods, TUserInfo, TUserPass } from './types';

const signUp = (values: TFieldValues) =>
	axiosWrap({
		method: Methods.POST,
		url: '/auth/signup',
		data: values,
	});

const signIn = (values: TFieldValues) =>
	axiosWrap({
		method: Methods.POST,
		url: '/auth/signin',
		data: values,
	});

const getUser = () =>
	axiosWrap({
		method: Methods.GET,
		url: '/auth/user',
	});

const checkAuth = async () => {
	const res = await getUser();
	return res.status === 200;
};

const logOut = () =>
	axiosWrap({
		method: Methods.POST,
		url: '/auth/logout',
	});

const updateUser = (values: TUserInfo) =>
	axiosWrap({
		method: Methods.PUT,
		url: '/user/profile',
		data: values,
	});

const changePassword = (values: TUserPass) =>
	axiosWrap({
		method: Methods.PUT,
		url: '/user/password',
		data: values,
	});

const changeAvatar = (formData: FormData) =>
	axiosWrap({
		method: Methods.PUT,
		url: '/user/profile/avatar',
		data: formData,
	});

export {
	signUp,
	signIn,
	getUser,
	checkAuth,
	logOut,
	updateUser,
	changePassword,
	changeAvatar,
};
