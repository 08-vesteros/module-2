export type TInput = {
	label: string;
	type: string;
	name: string;
};

export type TFieldValues = {
	[key: string]: string;
};

export type TUserInfo = {
	[first_name: string]: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
	avatar: string;
};

export type TUser =
	| (TUserInfo & {
			id: number;
	  })
	| null;

export type TUserPass = {
	oldPassword: string;
	newPassword: string;
};

export const enum Methods {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export type TRequest = {
	method: Methods;
	url: string;
	data?: TFieldValues | FormData;
};
