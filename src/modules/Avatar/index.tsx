import React from 'react';
import { PRAKTIKUM_RESOURCES_URL } from '../../constants';
import { AvatarWrapper } from './styled';
import useUser from '../../contexts/user';
import TRex from '../../img/t-rex.png';
import { changeAvatar } from '../../utils/user';
import useWarn from '../../contexts/warn';

const Avatar = () => {
	const { setWarn } = useWarn();
	const { user, setUser } = useUser();
	const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (!files?.length) return;

		const formData = new FormData();
		formData.append('avatar', files[0]);
		const res = await changeAvatar(formData);

		if (res.status !== 200) {
			setWarn(res.data.reason);
			return;
		}

		setUser(res.data);
	};

	return (
		<AvatarWrapper>
			<label htmlFor='avatar' className='avatar'>
				<img
					src={user!.avatar ? PRAKTIKUM_RESOURCES_URL + user!.avatar : TRex}
					alt={user!.login}
					className='avatar__img'
				/>
				<input
					onChange={uploadAvatar}
					type='file'
					accept='image/png, image/jpeg'
					name='avatar'
					id='avatar'
					hidden
				/>
				<div className='avatar__change' />
			</label>
		</AvatarWrapper>
	);
};

export default Avatar;
