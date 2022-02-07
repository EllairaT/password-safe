// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	client: "sqlite3",
	connection: {
		filename: "./db/lockio.sqlite3",
	},
	useNullAsDefault: true,
	migrations: {
		directory: __dirname + "/db/data/migrations",
	},
	seeds: {
		directory: __dirname + "/db/data/seeds",
	},
}
