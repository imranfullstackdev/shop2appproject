const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pernshopify_db",
  password: "lmvit123",
  port: 5432,
});

module.exports = pool;
