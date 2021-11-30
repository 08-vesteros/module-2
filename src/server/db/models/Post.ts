import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import Comment from './Comment';

@Table
export default class Post extends Model {
	@Column text!: string;

	@Column title!: string;

	@Column userId!: number;

	@HasMany(() => Comment) comments: Comment[] | null = null;
}
