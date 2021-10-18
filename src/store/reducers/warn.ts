import { BaseActionType } from '../types';

export type WarnState = {
	item: string;
};

const enum actions {
	SET_WARN = 'SET_WARN',
}

const defaultState: WarnState = {
	item: '',
};

interface WarnActionType extends BaseActionType<actions> {
	item: string;
}

export const warnReducer = (
	state = defaultState,
	{ type, item }: WarnActionType
): WarnState => {
	switch (type) {
		case actions.SET_WARN:
			return {
				...state,
				item,
			};
		default:
			return state;
	}
};

export const setWarn = (item: string): WarnActionType => ({
	type: actions.SET_WARN,
	item,
});
