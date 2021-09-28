type ValidationRule = (val: string) => boolean;

export const isEmpty: ValidationRule = val => val.trim().length === 0;
export const isEmail: ValidationRule = val =>
	/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val);
export const isLogin: ValidationRule = val => /^[A-Za-z0-9_-]*$/.test(val);
export const isPhone: ValidationRule = val =>
	/^(?=.*[0-9])([0-9()/+ -]*)$/.test(val);
export const isPassword: ValidationRule = val => /^\S*$/.test(val);
export const isValidLength: (min: number) => ValidationRule = min => val =>
	val.length >= min;
export const isEqual: (val1: string) => ValidationRule = val1 => val2 =>
	val1 === val2;
