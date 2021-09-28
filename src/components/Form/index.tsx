import React from 'react';
import { FormWrapper } from './styled';
import { Props } from './types';

const Form = ({ children, ...props }: Props) => (
	<FormWrapper {...props}>{children}</FormWrapper>
);

export default Form;
