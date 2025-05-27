const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'odonto_db',
  password: '145781', 
  port: 5432,
});

module.exports = pool;