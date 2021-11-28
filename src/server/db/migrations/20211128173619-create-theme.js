module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface
			.createTable('Themes', {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					type: Sequelize.STRING,
				},
			})
			.then(() => {
				queryInterface.bulkInsert('Themes', [
					{
						id: 1,
						name: 'light',
					},
					{
						id: 2,
						name: 'dark',
					},
				]);
			});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Themes');
	},
};
