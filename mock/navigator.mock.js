// eslint-disable-next-line
let nav;

if (typeof navigator !== 'undefined') {
	nav = navigator;
} else {
	nav = {
		onLine: true,
	};
}
// eslint-disable-next-line
export default nav;
