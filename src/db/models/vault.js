"use strict"

module.exports = (sequelize, DataTypes) => {
	const Vault = sequelize.define(
		"vault",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			accountId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
		},
		{ tableName: "vault" }
	)

	return Vault
}
