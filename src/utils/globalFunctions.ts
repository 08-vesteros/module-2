export const toLocalDate = (date: string) =>
	new Date(date).toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	});

export const toLocalDateTime = (date: string) =>
	new Date(date).toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	});
