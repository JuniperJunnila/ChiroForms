/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("basic_information", (table) => {
    table.increments("basic_id").primary();
    table.string("basic_patient_name");
    table.date("basic_today");
    table.date("basic_accident_date");
    table.boolean("basic_company");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("basic_information");
};
