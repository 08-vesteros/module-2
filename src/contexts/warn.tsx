import React, { FC, useContext, useState } from 'react';

type TWarnContext = {
	warn: string;
	setWarn: React.Dispatch<string>;
};

export const WarnContext = React.createContext<TWarnContext>({
	warn: '',
	setWarn: () => {},
});

export const WarnProvider: FC = ({ children }) => {
	const [warn, setWarn] = useState('');

	return (
		<WarnContext.Provider value={{ warn, setWarn }}>
			{children}
		</WarnContext.Provider>
	);
};

const useWarn = () => useContext(WarnContext);

export default useWarn;
