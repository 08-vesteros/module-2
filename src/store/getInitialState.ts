// import { RootState } from './types';
// import { RouterState } from 'connected-react-router';
import { defaultState as userDefaultState } from './reducers/user';
import { defaultState as warnDefaultState } from './reducers/warn';

// export const getInitialState = (pathname: string = '/'): RootState => {
//     return {
//         user: userDefaultState,
//         warn: warnDefaultState,
//         router: {
//             location: { pathname, search: '', hash: '', key: '' },
//             action: 'POP',
//         } as RouterState<never>,
//     };
// };

export const initialState = {
	user: userDefaultState,
	warn: warnDefaultState,
};
