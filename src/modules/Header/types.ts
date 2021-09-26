import { FunctionComponent } from 'react';

export type TRoute = {
	path: string;
	component: FunctionComponent;
};

export type TRoutes = Array<TRoute>;

export type Props = {
	routes: TRoutes;
};
