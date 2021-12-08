import {
	Model,
	Table,
	Column,
	ForeignKey,
	HasMany,
	BelongsTo,
} from 'sequelize-typescript';
import Post from './Post';

@Table
export default class Message extends Model {
	@Column text!: string;

	@Column userId!: number;

	@Column userName!: string;

	@ForeignKey(() => Post) @Column postId!: number;

	@ForeignKey(() => Message) @Column parentId?: number;

	@BelongsTo(() => Message, 'parentId') parent?: Message;

	@HasMany(() => Message) replies?: Message[];
}
