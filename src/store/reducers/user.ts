import {
	BaseActionType,
	LoadStatus,
	CurrentStatus,
	StatusActionType,
} from '../types';
import { TUser } from '../../utils/types';

export type UserState = {
	item: TUser;
	status: CurrentStatus;
};

const enum actions {
	SET_USER = 'SET_USER',
}

const defaultState: UserState = {
	status: LoadStatus.PENDING,
	item: null,
};

interface UserActionType extends StatusActionType, BaseActionType<actions> {
	item: TUser;
}

export const userReducer = (
	state = defaultState,
	{ type, status, item }: UserActionType
): UserState => {
	switch (type) {
		case actions.SET_USER:
			return {
				...state,
				status,
				item,
			};
		default:
			return state;
	}
};

export const setUser = ({ status, item }: UserState): UserActionType => ({
	type: actions.SET_USER,
	item,
	status,
});

export const setUserSuccess = (item: TUser): UserActionType =>
	setUser({ item, status: LoadStatus.SUCCESS });

export const setUserError = (): UserActionType =>
	setUser({ item: null, status: LoadStatus.ERROR });
