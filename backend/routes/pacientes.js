const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota para buscar pacientes
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM pacientes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para criar paciente
router.post('/', async (req, res) => {
  const { nome, cpf, num_contrato } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO pacientes (nome, cpf, num_contrato) VALUES ($1, $2, $3) RETURNING *',
      [nome, cpf, num_contrato]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;