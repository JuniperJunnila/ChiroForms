/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("example_foreign", (table) => {
    table.increments("foreign_id").primary();
    table.string("foreign_string");
    table.date("foreign_date");
    table.boolean("foreign_boolean");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("example_foreign");
};
