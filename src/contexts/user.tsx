import React, { FC, useContext, useState } from 'react';
import { getUser, logOut } from '../utils/user';
import { TUser } from '../utils/types';

type TUserContext = {
	user: TUser;
	isLoggedIn: boolean;
	isLoading: boolean;
	setUser: React.Dispatch<TUser>;
	signOut: () => Promise<void>;
	getAndSetUser: () => Promise<TUser>;
	setLoggedIn: React.Dispatch<boolean>;
};

export const UserContext = React.createContext<TUserContext>({
	user: null,
	isLoggedIn: false,
	isLoading: false,
	setUser: () => {},
	signOut: async () => {},
	getAndSetUser: async () => null,
	setLoggedIn: () => {},
});

export const UserProvider: FC = ({ children }) => {
	const [user, setUser] = useState(null as TUser);
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const getAndSetUser = async () => {
		setLoading(true);
		const res = await getUser();
		setUser(res.status === 200 ? res.data : null);
		setLoggedIn(res.status === 200);
		setLoading(false);
		return res.data;
	};

	const signOut = async () => {
		const res = await logOut();
		if (res.status === 200) setLoggedIn(false);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				isLoggedIn,
				isLoading,
				setUser,
				getAndSetUser,
				signOut,
				setLoggedIn,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext);

export default useUser;
