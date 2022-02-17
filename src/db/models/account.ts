import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config/config"
interface IAccountAttributes {
	id: number
	slug: string
	service_id: number
	auth_id: number
	icon?: Blob | string
	alias?: string
	createdAt?: Date
	updatedAt?: Date
	deletedAt?: Date
}

export interface AccountInput
	extends Optional<IAccountAttributes, "id" | "slug"> {}

export interface AccountOutput extends Required<IAccountAttributes> {}

class Account
	extends Model<IAccountAttributes, AccountInput>
	implements IAccountAttributes
{
	public id!: number
	public slug!: string
	public service_id!: number
	public auth_id!: number
	public alias!: string
	public icon!: Blob | string

	public readonly createdAt: Date
	public readonly updatedAt: Date
	public readonly deletedAt: Date
}

Account.init(
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
		service_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		auth_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		alias: {
			type: DataTypes.STRING,
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

export default Account
