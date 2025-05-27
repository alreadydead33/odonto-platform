CREATE TABLE pacientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(11) UNIQUE NOT NULL,
  num_contrato VARCHAR(20) UNIQUE NOT NULL,
  status_tratamento VARCHAR(50) DEFAULT 'Diagnóstico'
);