import React, { FC, useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, BrowserRouter } from 'react-router-dom';
import Comments from '../../components/Comments';
import { Posts } from '../../components/Posts';
import { Wrapper } from '../../ui/wrapper';
import { PostsTypes } from '../../components/Posts/types';
import { getPosts } from '../../utils/post';

const Forum: FC = () => {
	const [postsData, setPostsData] = useState<PostsTypes[] | []>([]);
	const [updated, setUpdated] = useState<boolean>(true);
	const match = useRouteMatch();

	useEffect(() => {
		if (!updated) return;
		getPosts().then(res => {
			setPostsData(res.data);
			setUpdated(false);
		});
	}, [updated]);

	return (
		<Wrapper alignItems='flex-start'>
			{/* поправить при добавлении серверной авторизации */}
			<BrowserRouter>
				<Switch>
					<Route path={`${match.path}/:id`}>
						<Comments />
					</Route>
					<Route
						path={match.path}
						render={() => <Posts data={postsData} setUpdated={setUpdated} />}
					/>
				</Switch>
			</BrowserRouter>
		</Wrapper>
	);
};

Forum.displayName = 'Forum';

export default Forum;
