import { BLACK_COLOR, DARK_PRIMARY_COLOR, WHITE_COLOR } from '../constants';

export const lightTheme = {
	backgroundColor: WHITE_COLOR,
	color: '#363537',
	inputLabelBgColor: WHITE_COLOR,
	inputColor: BLACK_COLOR,
	canvasColor: 'transparent',
	borderCanvas: `1px solid ${BLACK_COLOR}`,
};

export const darkTheme = {
	backgroundColor: '#1f2028',
	color: '#FAFAFA',
	inputLabelBgColor: '#0B0A0C',
	inputColor: WHITE_COLOR,
	canvasColor: BLACK_COLOR,
	borderCanvas: `1px solid ${WHITE_COLOR}`,
};

export type ThemeType = {
	backgroundColor: string;
	color: string;
};

export enum Themes {
	DARK = 'dark',
	LIGHT = 'light',
}
