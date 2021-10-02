import { InputProps } from '../Input/types';
import { InputErrorProps } from '../InputError/types';

export type InputGroupProps = {
	label: string;
};

export type Props = InputGroupProps & InputProps & InputErrorProps;
