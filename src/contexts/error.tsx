import React, { FC, useState } from 'react';

type TErrorContext = {
	error: string;
	setError: React.Dispatch<string>;
};

const ErrorContext = React.createContext<TErrorContext>({
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
export default ErrorContext;
