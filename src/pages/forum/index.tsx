import React, { FC, useState } from 'react';
import { Switch, Route, useRouteMatch, BrowserRouter } from 'react-router-dom';
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
			{/* поправить при добавлении серверной авторизации */}
			<BrowserRouter>
				<Switch>
					<Route path={`${match.path}/:id`}>
						<Comments />
					</Route>
					<Route path={match.path} render={() => <Posts data={postsData} />} />
				</Switch>
			</BrowserRouter>
		</Wrapper>
	);
};

Forum.displayName = 'Forum';

export default Forum;
