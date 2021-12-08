import axiosWrap from './axios';
import { Methods, TFieldValues } from './types';

const getMessages = () =>
	axiosWrap({
		url: '/comments',
		server: true,
		method: Methods.GET,
	});

const getMessageById = (id: number) =>
	axiosWrap({
		url: `/comments/${id}`,
		server: true,
		method: Methods.GET,
	});

const addMessage = (values: TFieldValues) =>
	axiosWrap({
		url: '/comments',
		server: true,
		method: Methods.POST,
		data: values,
	});

const getPostMessages = (postId: number | string) =>
	axiosWrap({
		url: `/postComments/${postId}`,
		server: true,
		method: Methods.GET,
	});

export { getMessages, getMessageById, addMessage, getPostMessages };
