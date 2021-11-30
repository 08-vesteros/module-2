import {
	Model,
	Table,
	Column,
	ForeignKey,
	HasMany,
	HasOne,
	BelongsTo,
} from 'sequelize-typescript';
import Post from './Post';

@Table
export default class Comment extends Model {
	@Column text!: string;

	@Column userId!: number;

	@ForeignKey(() => Post) @Column postId!: number;

	@ForeignKey(() => Comment) @Column parentId?: number;

	// @BelongsTo(() => Comment, 'parentId') parent?: Comment;

	@HasMany(() => Comment) replies?: Comment[];
}
