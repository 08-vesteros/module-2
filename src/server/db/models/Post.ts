import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import Message from './Message';

@Table
export default class Post extends Model {
	@Column topic!: string;

	@Column userId!: number;

	@Column userName!: string;

	@HasMany(() => Message) messages?: Message[];
}
