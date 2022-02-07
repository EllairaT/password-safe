import { connectedKnex } from "./knex"

// accepts service, address, alias, password, icon
export function createAccount(req) {
	return connectedKnex("accounts").insert(req)
}

// returns everything
export function getAllAccounts() {
	return connectedKnex("")
}

export function getAccount() {}

export function deleteAccount() {}

export function updateAccount() {}
