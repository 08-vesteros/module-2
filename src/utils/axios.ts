import axios, { AxiosResponse } from 'axios';
import { PRAKTIKUM_BASE_URL } from '../constants/index';
import { TRequest } from './types';

axios.defaults.baseURL = PRAKTIKUM_BASE_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
	res => res,
	err => err.response
);

const axiosWrap = async (options: TRequest) => {
	const res: AxiosResponse = await axios(options);
	return res;
};

export default axiosWrap;
