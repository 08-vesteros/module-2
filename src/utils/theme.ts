import axiosWrap from './axios';
import { Methods, TFieldValues } from './types';

const getUserTheme = () =>
	axiosWrap({
		url: '/theme',
		server: true,
		method: Methods.GET,
	});

const updateUserTheme = (values: any) =>
	axiosWrap({
		url: '/theme',
		server: true,
		method: Methods.POST,
		data: values,
	});

export { getUserTheme, updateUserTheme };
