// Update with your config settings.

const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "postgresql",
  connection: DATABASE_URL,
  migrations: {
    directory: path.join(__dirname, "src", "db", "dev_migrations")
  },
  seeds: {
    directory: path.join(__dirname, "src", "db", "dev_seeds")
  },
};
export const staging = {
  client: "postgresql",
  connection: DATABASE_URL,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.join(__dirname, "src", "db", "stage_migrations")
  },
  seeds: {
    directory: path.join(__dirname, "src", "db", "stage_seeds")
  },
};
export const production = {
  client: "postgresql",
  connection: DATABASE_URL,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.join(__dirname, "src", "db", "production_migrations")
  },
  seeds: {
    directory: path.join(__dirname, "src", "db", "production_seeds")
  },
};
