import axiosWrap from './axios';
import { Methods, TFieldValues } from './types';

const getPosts = () =>
	axiosWrap({
		url: '/posts',
		server: true,
		method: Methods.GET,
	});

const getPostById = (id: number) =>
	axiosWrap({
		url: `/posts/${id}`,
		server: true,
		method: Methods.GET,
	});

const addPost = (values: TFieldValues) =>
	axiosWrap({
		url: '/posts',
		server: true,
		method: Methods.POST,
		data: values,
	});

export { getPosts, getPostById, addPost };
