// eslint-disable-next-line import/no-mutable-exports
let localStorage;

if (
	typeof window !== 'undefined' &&
	typeof window.getComputedStyle === 'function'
) {
	localStorage = window.localStorage;
} else {
	localStorage = {
		setItem() {},
		getItem() {},
	};
}

export default localStorage;
