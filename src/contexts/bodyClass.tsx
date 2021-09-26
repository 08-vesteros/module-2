import React, { FC, useState } from 'react';

type TBodyClassContext = {
	bodyClass: string;
	setBodyClass: React.Dispatch<string>;
};

const BodyClassContext = React.createContext<TBodyClassContext>({
	bodyClass: '',
	setBodyClass: () => {},
});

export const BodyClassProvider: FC = ({ children }) => {
	const [bodyClass, setBodyClass] = useState('');

	return (
		<BodyClassContext.Provider value={{ bodyClass, setBodyClass }}>
			{children}
		</BodyClassContext.Provider>
	);
};
export default BodyClassContext;
