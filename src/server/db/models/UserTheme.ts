import { Model, Table, Column } from 'sequelize-typescript';

@Table
export default class UserTheme extends Model {
	@Column userId!: number;

	@Column theme!: string;
}
