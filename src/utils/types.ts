export type TInput = {
	label: string;
	type: string;
	name: string;
};

export type TFieldValues = {
	[key: string]: string;
};

export type TUser = {
	id: number;
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
	avatar: string;
} | null;
