import { Dispatch } from 'react';

export const initialValues = {
	text: '',
	parentId: null,
};

export type Props = {
	setUpdated: Dispatch<boolean>;
	setIsReply?: Dispatch<boolean>;
	postId: string;
	parentId?: string;
};
