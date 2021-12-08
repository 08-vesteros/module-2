module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('UserTheme', {
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			theme: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('UserTheme');
	},
};
