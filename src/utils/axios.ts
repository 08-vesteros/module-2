import axios, { AxiosResponse } from 'axios';
import { PRAKTIKUM_BASE_URL } from '../constants/index';
import { TRequest } from './types';

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
	res => res,
	err => err.response
);

const axiosWrap = async (options: TRequest) => {
	axios.defaults.baseURL = options.server
		? 'http://localhost:3000'
		: PRAKTIKUM_BASE_URL;
	const res: AxiosResponse = await axios(options);
	return res;
};

export default axiosWrap;
