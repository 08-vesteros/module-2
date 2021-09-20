import React from 'react';
import Button from './components/Button';
import { ButtonTypes } from './components/Button/types';

const App = () => (
	<Button
		view={ButtonTypes.inGame}
		content='START'
		onClick={() => console.log('click')}
	/>
);

export default App;
