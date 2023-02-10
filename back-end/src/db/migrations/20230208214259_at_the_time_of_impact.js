/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("at_the_time_of_impact", (table) => {
    table.increments("impact_id").primary();
    table.boolean("impact_consciousness");
    table.boolean("impact_dazed");
    table.boolean("impact)time");
    table.string("impact_head_body");
    //sent as an array, needs to be stringified
    table.string("impact_hands");
    table.boolean("impact_hat");
    table.boolean("impact_head");
    table.boolean("impact_face");
    table.boolean("impact_shoulders");
    table.boolean("impact_neck");
    table.boolean("impact_chest");
    table.boolean("impact_hips");
    table.boolean("impact_knees");
    table.boolean("impact_feet");
    table.string("impact_headrest");
    table.string("impact_headrest_position");
    table.boolean("impact_seatbelt");
    table.boolean("impact_seatbelt_slide");
    table.boolean("impact_airbag");
    table.boolean("impact_airbag_deployed");
    table.boolean("impact_safety");
    //sent as an array, needs to be stringified
    table.string("impact_damage");
    //sent as an array, needs to be stringified
    table.string("impact_dented");
    //sent as an array, needs to be stringified
    table.string("impact_doors");
    table.boolean("impact_hospital");
    table.boolean("impact_bleeding");
    table.boolean("impact_doctors");
    table.boolean("impact_surgery");
    table.boolean("impact_surgery_rec");
    table.boolean("impact_medication");
    //sent as an array, needs to be stringified
    table.string("impact_home");

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
  return knex.schema.dropTable("at_the_time_of_impact");
};
