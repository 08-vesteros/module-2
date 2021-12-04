import { BLACK_COLOR, WHITE_COLOR } from '../constants';

export const lightTheme = {
	backgroundColor: WHITE_COLOR,
	color: '#363537',
};

export const darkTheme = {
	backgroundColor: '#1f2028',
	color: '#FAFAFA',
};

export type ThemeType = {
	backgroundColor: string;
	color: string;
};

export enum Themes {
	DARK = 'dark',
	LIGHT = 'light',
}
