import React, { FC } from 'react';
import Button from '../../components/Button';
import useUser from '../../contexts/user';

const Profile: FC = () => {
	const { signOut } = useUser();

	const signOff = () => {
		signOut();
	};

	return (
		<div>
			<p>Profile</p>

			<Button onClick={signOff} content='Log out' />
		</div>
	);
};

export default Profile;
