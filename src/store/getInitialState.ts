import { defaultState as warnDefaultState } from './reducers/warn';
import { LoadStatus, RootState } from './types';

export const initialState: RootState = {
	user: {
		item: null,
		status: LoadStatus.ERROR,
	},
	warn: warnDefaultState,
};
