import axiosWrap from './axios';
import { Methods } from './types';

const getOauth = () =>
	axiosWrap({
		method: Methods.GET,
		url: '/oauth/yandex/service-id/?redirect_uri=http://localhost:3000',
	});

const postOauth = (values: any) =>
	axiosWrap({
		method: Methods.POST,
		url: '/oauth/yandex',
		data: values,
	});

export { getOauth, postOauth };
