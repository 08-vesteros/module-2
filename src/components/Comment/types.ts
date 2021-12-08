import { Dispatch } from 'react';
import { CommentsTypes } from '../Comments/types';

export type Props = {
	setUpdated: Dispatch<boolean>;
} & CommentsTypes;
