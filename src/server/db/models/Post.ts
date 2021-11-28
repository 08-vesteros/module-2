import { Model, Table, Column } from 'sequelize-typescript';

@Table
export default class Post extends Model {
	@Column text!: string;

	@Column title!: string;

	@Column userId!: number;
}
