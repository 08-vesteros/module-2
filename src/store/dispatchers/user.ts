import { Dispatch } from 'react';
import { setUserError, setUserSuccess, UserState } from '../reducers/user';
import { getUser } from '../../utils/user';

export const fetchUser = () => async (dispatch: Dispatch<UserState>) => {
	const res = await getUser();
	dispatch(res.status === 200 ? setUserSuccess(res.data) : setUserError());
};
