"use strict"

module.exports = (sequelize, DataTypes) => {
	const Auth = sequelize.define(
		"auth",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			authName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			authPass: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ tableName: "auth" }
	)

	return Auth
}
