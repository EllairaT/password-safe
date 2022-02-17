import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config/config"
interface IVaultAttributes {
	id: number
	slug: string
	account_id: number
	createdAt?: Date
	updatedAt?: Date
	deletedAt?: Date
}

export interface VaultInput extends Optional<IVaultAttributes, "id" | "slug"> {}

export interface VaultOutput extends Required<IVaultAttributes> {}

class Vault
	extends Model<IVaultAttributes, VaultInput>
	implements IVaultAttributes
{
	public id!: number
	public slug!: string
	public account_id: number

	public readonly createdAt: Date
	public readonly updatedAt: Date
	public readonly deletedAt: Date
}

Vault.init(
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
		account_id: {
			type: DataTypes.INTEGER.UNSIGNED,
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

export default Vault
