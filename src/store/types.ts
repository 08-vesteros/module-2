import rootReducer from './reducers';

export interface BaseActionType<T> {
	type: T;
}

export interface StatusActionType {
	status: CurrentStatus;
}

export const enum LoadStatus {
	SUCCESS = 'success',
	PENDING = 'pending',
	ERROR = 'error',
}

export type CurrentStatus =
	| LoadStatus.SUCCESS
	| LoadStatus.PENDING
	| LoadStatus.ERROR;

export type RootState = ReturnType<typeof rootReducer>;
