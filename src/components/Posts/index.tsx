import React from 'react';
import CreatePostsForm from '../CreatePostsForm';
import { PostsContainer, ListItem, FormWrapper, Header } from './styled';
import { Props } from './types';

export const Posts = ({ data }: Props) => (
	<>
		<FormWrapper>
			<CreatePostsForm />
		</FormWrapper>
		{data.length ? (
			<>
				<Header>
					<span className='header__topic'>Topic</span>
					<span>Replies</span>
				</Header>
				<PostsContainer>
					{data.map(item => (
						<li key={item.id}>
							<ListItem to={`forum/${item.id}`}>{item.title}</ListItem>
						</li>
					))}
				</PostsContainer>
			</>
		) : (
			<span>No Topics</span>
		)}
	</>
);
