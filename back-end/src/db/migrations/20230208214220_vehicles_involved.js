/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("vehicles_involved", (table) => {
    table.increments("vehicles_id").primary();
    table.string("location_type");
    table.boolean("location_else");

    table.integer("basic_id").unsigned().notNullable();
    table
      .foreign("basic_id")
      .references("basic_id")
      .inTable("basic_information")
      .onDelete("cascade");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("vehicles_involved");
};
