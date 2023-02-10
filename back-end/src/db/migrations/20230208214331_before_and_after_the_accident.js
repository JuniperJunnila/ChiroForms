/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("before_and_after_the_accident", (table) => {
    table.increments("before_after_id").primary();

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
  return knex.schema.dropTable("before_and_after_the_accident");
};
