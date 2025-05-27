-- Exemplo CORRETO de conteúdo para pacientes.pgsql
CREATE TABLE IF NOT EXISTS pacientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(11) UNIQUE NOT NULL,
  num_contrato VARCHAR(20) UNIQUE NOT NULL
);