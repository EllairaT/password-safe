"use strict"

module.exports = (sequelize, DataTypes) => {
	const Service = sequelize.define(
		"service",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			icon: {
				type: DataTypes.BLOB,
			},
		},
		{ tableName: "service" }
	)

	return Service
}
