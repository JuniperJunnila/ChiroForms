/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("your_work", (table) => {
    table.increments("work_id").primary();
    table.boolean("work_body_location");
    table.boolean("work_body_parts");
    table.boolean("work_walk");
    table.boolean("work_emergency");
    table.boolean("work_assistance");
    table.boolean("work_pain");
    table.string("work_that_day");
    table.string("work_next_day");

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
  return knex.schema.dropTable("your_work");
};
