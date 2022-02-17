import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config/config"

interface IServiceAttributes {
	id: number
	slug: string
	title: string
	icon?: Blob | string
	createdAt?: Date
	updatedAt?: Date
	deletedAt?: Date
}

export interface ServiceInput
	extends Optional<IServiceAttributes, "id" | "slug"> {}

export interface ServiceOutput extends Required<IServiceAttributes> {}

class Service
	extends Model<IServiceAttributes, ServiceInput>
	implements IServiceAttributes
{
	public id!: number
	public slug!: string
	public title!: string
	public icon!: Blob | string

	public readonly createdAt: Date
	public readonly updatedAt: Date
	public readonly deletedAt: Date
}

Service.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		slug: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		icon: {
			type: DataTypes.BLOB,
			defaultValue: DataTypes.STRING,
		},
	},
	{
		// paranoid: true to our model imposes a soft delete on the model by adding a
		// deletedAt attribute that marks records as deleted when invoking the destroy method
		timestamps: true,
		sequelize: sequelizeConnection,
		paranoid: true,
	}
)

export default Service
