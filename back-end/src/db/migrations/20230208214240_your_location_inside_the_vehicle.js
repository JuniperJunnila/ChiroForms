/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable(
    "your_location_inside_the_vehicle",
    (table) => {
      table.increments("in_vehicle_id").primary();
      table.string("in_vehicle_where");
      table.string("in_vehicle_else_driver");
      table.string("in_vehicle_else");
      table.boolean("in_vehicle_know");
      table.boolean("in_vehicle_brace");
      table.string("in_vehicle_make");
      table.string("in_vehicle_model");
      table.string("in_vehicle_owner");
      table.string("in_vehicle_owner_relationship");
      //sent as an array, needs to be stringified
      table.string("in_vehicle_string");
      table.integer("in_vehicle_other");

      table.integer("basic_id").unsigned().notNullable();
      table
        .foreign("basic_id")
        .references("basic_id")
        .inTable("basic_information")
        .onDelete("cascade");
    }
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("your_location_inside_the_vehicle");
};
