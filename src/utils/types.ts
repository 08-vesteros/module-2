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
	firstName: string;
	secondName: string;
	displayName: string;
	login: string;
	email: string;
	phone: string;
	avatar: string;
} | null;
