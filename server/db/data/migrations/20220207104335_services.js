/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.raw(`CREATE TABLE "services" (
	"id"	INTEGER NOT NULL,
	"title"	TEXT NOT NULL,
	"icon"	BLOB,
	PRIMARY KEY("id" AUTOINCREMENT)
)`)
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("services")
}
