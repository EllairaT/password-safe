import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config/config"
interface IAuthAttributes {
	id: number
	slug: string
	auth_name: string
	auth_key: string
	createdAt?: Date
	updatedAt?: Date
	deletedAt?: Date
}

export interface AuthInput extends Optional<IAuthAttributes, "id" | "slug"> {}

export interface AuthOutput extends Required<IAuthAttributes> {}

class Auth
	extends Model<IAuthAttributes, AuthInput>
	implements IAuthAttributes
{
	public id!: number
	public slug!: string
	public auth_name!: string
	public auth_key!: string

	public readonly createdAt: Date
	public readonly updatedAt: Date
	public readonly deletedAt: Date
}

Auth.init(
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
		auth_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		auth_key: {
			type: DataTypes.STRING,
			allowNull: false,
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

export default Auth
