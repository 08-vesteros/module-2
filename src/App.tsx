import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import { inGameButtonTheme } from './components/Button/styled';
import Input from './components/Input';

const App = () => (
	<div style={{ display: 'flex', flexDirection: 'column' }}>
		<ThemeProvider theme={inGameButtonTheme}>
			<Button content='START' onClick={() => console.log('click')} />
		</ThemeProvider>

		<Button disabled content='disabled' onClick={() => console.log('click')} />

		<Input />
	</div>
);

export default App;
