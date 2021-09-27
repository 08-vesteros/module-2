import axios, { AxiosResponse } from 'axios';
import { PRAKTIKUM_BASE_URL } from '../constants/index';

axios.defaults.baseURL = PRAKTIKUM_BASE_URL;

axios.interceptors.response.use(
	res => res,
	err => err.response
);

const axiosWrap = async ({ ...options }) => {
	const res: AxiosResponse = await axios({ ...options });
	return res;
};

export default axiosWrap;
