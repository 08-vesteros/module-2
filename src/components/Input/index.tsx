import React from 'react';
import { InputWrapper } from './styled';
import { Props } from './types';

const Input = ({ ...props }: Props) => <InputWrapper {...props} />;

export default Input;
