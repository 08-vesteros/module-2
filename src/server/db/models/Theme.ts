import { Model, Table, Column } from 'sequelize-typescript';

@Table
export default class Post extends Model {
	@Column name!: string;
}
