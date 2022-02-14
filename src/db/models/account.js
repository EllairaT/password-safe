module.exports = (sequelize, DataTypes) => {
	const Account = sequelize.define(
		"account",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			serviceId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			authId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			alias: {
				type: DataTypes.STRING,
			},
		},
		{ tableName: "account" }
	)

	return Account
}
