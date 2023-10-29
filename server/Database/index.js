const { Pool } = require("pg");
exports.pool = new Pool({
  host: "localhost",
  database: "pagination",
  user: "postgres",
  port: "5432",
  password: "admin",
});
