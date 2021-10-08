import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { TRequest } from '../utils/types';
import axiosWrap from '../utils/axios';

const useFetch = <T>({ url, ...options }: TRequest) => {
	const [response, setResponse] = useState<AxiosResponse<T> | null>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);

		axiosWrap({ url, ...options }).then(res => {
			setIsLoading(false);
			setResponse(res);
		});
	}, [url]);

	return { response, isLoading };
};

export default useFetch;
