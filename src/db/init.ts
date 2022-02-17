import Vault from "./models/vault"
import Auth from "./models/auth"
import Service from "./models/service"
import Account from "./models/account"

const dbInit = () => {
	Vault.sync()
	Account.sync()
	Auth.sync()
	Service.sync()
}
