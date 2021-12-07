import React from 'react';
import { Link } from 'react-router-dom';
import { toLocalDate, toLocalDateTime } from '../../utils/globalFunctions';
import CreatePostsForm from '../CreatePostsForm';
import { Body, FormWrapper, Head, PostsTable } from './styled';
import { Props } from './types';

export const Posts = ({ data, setUpdated }: Props) => (
	<>
		<FormWrapper>
			<CreatePostsForm setUpdated={setUpdated} />
		</FormWrapper>
		{data.length ? (
			<PostsTable>
				<Head>
					<tr>
						<th className='topic'>Topic</th>
						<th className='replies'>Replies</th>
					</tr>
				</Head>
				<Body>
					{data.map(item => (
						<tr key={item.id}>
							<td>
								<Link className='topic-title' to={`forum/${item.id}`}>
									{item.topic}
								</Link>
								<p className='topic-meta'>
									{item.userName}, {toLocalDateTime(item.createdAt)}
								</p>
							</td>
							<td className='replies-count'>{item.repliesCount}</td>
						</tr>
					))}
				</Body>
			</PostsTable>
		) : (
			<span>No Topics</span>
		)}
	</>
);
