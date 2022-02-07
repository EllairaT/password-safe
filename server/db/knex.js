import knex from "knex"

export const connectedKnex = knex({
	client: "sqlite3",
	connection: {
		filename: "./data/lockio.sqlite3",
	},
	useNullAsDefault: true,
	migrations: {
		directory: "./data/migrations",
	},
	seeds: {
		directory: "./data/seeds",
	},
})
