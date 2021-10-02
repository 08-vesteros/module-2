export type ScoreDataProps = {
	id: number;
	login: string;
	score: number;
};

export type ScoreboardItemProps = {
	userData: ScoreDataProps;
	position: number;
};
