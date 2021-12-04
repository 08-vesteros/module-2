export const PRAKTIKUM_BASE_URL = 'https://ya-praktikum.tech/api/v2';
export const PRAKTIKUM_RESOURCES_URL = `${PRAKTIKUM_BASE_URL}/resources`;
export const PRIMARY_COLOR = '#8774E1';
export const DARK_PRIMARY_COLOR = '#6a52da';
export const WHITE_COLOR = '#ffffff';
export const BLACK_COLOR = '#000000';
export const RED_COLOR = '#ff0000';
export const INPUT_BORDER_COLOR = '#2f2f2f';
export const LIGHT_GREY = '#e6e6e6';
export const BORDER = `solid 1px ${LIGHT_GREY}`;
export const TEAM_NAME = 'vesteros';
export const PROD_URL = 'https://yp-08-vesteros-module-2.herokuapp.com/';
export const LOCAL_URL = 'http://localhost:3000';

// game settings
export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 150;
export const GRAVITY = 1;
export const JUMP_POWER = 5;
export const JUPM_HEIGHT = 20;
export const GAME_SPEED = 12;
export const BASE_ACCELERATION = 12;
export const DELTA_ACCELERATION = 0.5;
export const SPRITES_COORDS = {
	DINO: {
		x: 1338,
		y: 2,
	},
	DINO_LEFT: {
		x: 1602,
		y: 2,
	},
	DINO_RIGHT: {
		x: 1514,
		y: 2,
	},
	DINO_DUCK_LEFT: {
		x: 1866,
		y: 36,
	},
	DINO_DUCK_RIGHT: {
		x: 1984,
		y: 36,
	},
};
export const OBSTACLES = [
	{
		w: 92,
		h: 80,
		flying: true,
		frames: [
			{
				x: 352,
				y: 2,
			},
			{
				x: 260,
				y: 2,
			},
		],
	},
	{
		w: 34,
		h: 70,
		frames: [
			{
				x: 446,
				y: 2,
			},
		],
	},
	{
		w: 66,
		h: 70,
		frames: [
			{
				x: 480,
				y: 2,
			},
		],
	},
	{
		w: 100,
		h: 70,
		frames: [
			{
				x: 548,
				y: 2,
			},
		],
	},
	{
		w: 50,
		h: 96,
		frames: [
			{
				x: 652,
				y: 2,
			},
		],
	},
	{
		w: 100,
		h: 96,
		frames: [
			{
				x: 702,
				y: 2,
			},
		],
	},
	{
		w: 150,
		h: 96,
		frames: [
			{
				x: 802,
				y: 2,
			},
		],
	},
];
