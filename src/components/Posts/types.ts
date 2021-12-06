import { Dispatch } from 'react';

export type PostsTypes = {
	id: number;
	topic: string;
	userName: string;
	userId: number;
	createdAt: string;
	repliesCount: string;
};

export type Props = {
	data: PostsTypes[];
	setUpdated: Dispatch<boolean>;
};
