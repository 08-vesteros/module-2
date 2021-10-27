import React, { FC, useState } from 'react';
import {
	Switch,
	Route,
	useRouteMatch,
	BrowserRouter as Router,
} from 'react-router-dom';
import Comments from '../../components/Comments';
import { Posts } from '../../components/Posts';
import { PostsTypes } from '../../components/Posts/types';
import { Wrapper } from '../../ui/wrapper';
import { postsMockData } from './mock';

const Forum: FC = () => {
	const [postsData] = useState<PostsTypes[]>(postsMockData);
	const match = useRouteMatch();

	return (
		<Wrapper alignItems='flex-start'>
			<Router>
				<Switch>
					<Route path={`${match.path}/:id`}>
						<Comments />
					</Route>
					<Route path={match.path} render={() => <Posts data={postsData} />} />
				</Switch>
			</Router>
		</Wrapper>
	);
};

Forum.displayName = 'Forum';

export default Forum;
