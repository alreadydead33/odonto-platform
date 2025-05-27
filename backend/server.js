const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'odonto_db',
  password: 'isaisa',
  port: 3000,
});

// Rotas
app.get('/pacientes', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM pacientes');
  res.json(rows);
});

app.post('/pacientes', async (req, res) => {
  const { nome, cpf, num_contrato } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO pacientes (nome, cpf, num_contrato) VALUES ($1, $2, $3) RETURNING *',
    [nome, cpf, num_contrato]
  );
  res.status(201).json(rows[0]);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));