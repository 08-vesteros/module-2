import React from 'react';
import Input from '../Input';
import InputError from '../InputError';
import { InputGroupWrapper } from './styled';
import { Props } from './types';

const InputGroup = ({ ...props }: Props) => (
	<InputGroupWrapper>
		<label className='input' htmlFor={props.name}>
			<Input {...props} id={props.name} />
			<span className='input__label'>{props.label}</span>
		</label>
		<InputError {...props} />
	</InputGroupWrapper>
);

export default InputGroup;
