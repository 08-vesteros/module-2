import React, { FC, useContext, useState } from 'react';

type TErrorContext = {
	error: string;
	setError: React.Dispatch<string>;
};

export const ErrorContext = React.createContext<TErrorContext>({
	error: '',
	setError: () => {},
});

export const ErrorProvider: FC = ({ children }) => {
	const [error, setError] = useState('');

	return (
		<ErrorContext.Provider value={{ error, setError }}>
			{children}
		</ErrorContext.Provider>
	);
};

const useError = () => useContext(ErrorContext);

export default useError;
