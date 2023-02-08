const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

const migpath = path.join(__dirname, "src", "db", "migrations")
console.log(migpath)

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
  },

  staging: {
    client: "postgresql",
    connection: DATABASE_URL,

    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directtory: path.join(__dirname, "src", "db", "migrations"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,

    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directtory: path.join(__dirname, "src", "db", "migrations"),
    },
  },
};
