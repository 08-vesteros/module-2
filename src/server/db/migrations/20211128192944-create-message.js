module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Messages', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			text: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			userName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			postId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Posts',
					key: 'id',
				},
			},
			parentId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Messages',
					key: 'id',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Messages');
	},
};
