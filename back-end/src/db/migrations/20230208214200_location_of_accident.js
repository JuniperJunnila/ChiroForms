/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("location_of_accident", (table) => {
    table.increments("location_id").primary();
    table.string("location_city");
    table.string("location_state");
    table.integer("location_vehicles");
    table.string("location_moment_of_impact");

    //input returns string,  but mostly an int
    table.string("location_travelling");
    table.string("location_other_vehicle");

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
  return knex.schema.dropTable("location_of_accident");
};
