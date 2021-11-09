// eslint-disable-next-line import/no-mutable-exports
let nav;

if (typeof navigator !== 'undefined') {
	nav = navigator;
} else {
	nav = {
		onLine: true,
	};
}

export default nav;
