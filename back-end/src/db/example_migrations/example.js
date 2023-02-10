/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("example_migration", (table) => {
    table.increments("example_increment");
    table.string("example_string");
    table.date("example_date");
    table.integer("example_integer");
    table.boolean("example_boolean");
    table.float("example_float");
    table.datetime("example_datetime");
    table.time("example_time");
    table.timestamp("example_timestamp");
    table.json("example_json");
    table.integer("foreign_id").unsigned().notNullable();
    table
      .foreign("foreign_id")
      .references("foreign_id")
      .inTable("example_foreign")
      .onDelete("cascade");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("example_migration");
};
