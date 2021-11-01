import axiosWrap from './axios';
import { Methods } from './types';

const getOauth = () =>
	axiosWrap({
		method: Methods.GET,
		url: '/oauth/yandex/service-id',
	});

export { getOauth };
