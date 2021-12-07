export type CommentsTypes = {
	postId: number;
	id: number;
	userName: string;
	text: string;
	parentid: number | null;
	createdAt: string;
	root: number;
};

export type MatchTypes = {
	id: string;
};
