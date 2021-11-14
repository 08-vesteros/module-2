export type ScoreDataProps = {
	data: {
		id: number;
		name: string;
		vesterosScore: number;
	};
};

export type ScoreboardItemProps = {
	userData: ScoreDataProps;
	position: number;
};
