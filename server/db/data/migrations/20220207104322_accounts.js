/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.raw(`CREATE TABLE "accounts" (
	"id"	INTEGER NOT NULL,
	"service"	INTEGER NOT NULL,
	"address"	TEXT NOT NULL,
	"alias"	TEXT,
	"password"	INTEGER  NOT NULL,
	FOREIGN KEY("password") REFERENCES "passwords"("id"),
	FOREIGN KEY("service") REFERENCES "services"("id"),
	PRIMARY KEY("id")
)`)
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("accounts")
}
