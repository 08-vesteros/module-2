// eslint-disable-next-line
let localStorage;

if (
	typeof window !== 'undefined' &&
	typeof window.getComputedStyle === 'function'
) {
	localStorage = window.localStorage;
} else {
	localStorage = {
		// eslint-disable-next-line
		setItem() {},
		// eslint-disable-next-line
		getItem() {},
	};
}
// eslint-disable-next-line
export default localStorage;
