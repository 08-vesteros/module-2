import { Model, Table, Column, ForeignKey } from 'sequelize-typescript';
import Post from './Post';

@Table
export default class Comment extends Model {
	@Column text!: string;

	@Column userId!: number;

	@ForeignKey(() => Post) @Column postId!: number;
}
