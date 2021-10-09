const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('dist'));
	app.get('*', (_req, res) => {
		res.sendFile(path.join(__dirname, '/dist/index.html'));
	});
}

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
