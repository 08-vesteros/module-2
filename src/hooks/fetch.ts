import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import axiosWrap from '../utils/axios';

const useFetch = <T>(
	url: string,
	method: string,
	params?: { [x: string]: any }
) => {
	const [response, setResponse] = useState<AxiosResponse<T> | null>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);

		axiosWrap({ url, method, params }).then(res => {
			setIsLoading(false);
			setResponse(res);
		});
	}, [url]);

	return { response, isLoading };
};

export default useFetch;
