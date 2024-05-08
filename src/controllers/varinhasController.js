const pool = require('../config/dbConfig');

async function createVarinha(req, res) {
  const { material, comprimento, nucleo, data_fabricacao } = req.body;
  const query = 'INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [material, comprimento, nucleo, data_fabricacao];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao criar varinha:', err);
    res.status(500).send('Erro ao criar varinha');
  }
}

async function getAllVarinhas(req, res) {
  try {
    const result = await pool.query('SELECT * FROM varinhas');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao obter varinhas:', err);
    res.status(500).send('Erro ao obter varinhas');
  }
}

async function updateVarinha(req, res) {
  const id = req.params.id;
  const { material, comprimento, nucleo, data_fabricacao } = req.body;
  const query = 'UPDATE varinhas SET material=$1, comprimento=$2, nucleo=$3, data_fabricacao=$4 WHERE id=$5';
  const values = [material, comprimento, nucleo, data_fabricacao, id];

  try {
    const result = await pool.query(query, values);
    if (result.rowCount > 0) {
      res.send('Varinha atualizada com sucesso');
    } else {
      res.status(404).send('Varinha não encontrada');
    }
  } catch (err) {
    console.error('Erro ao atualizar varinha:', err);
    res.status(500).send('Erro ao atualizar varinha');
  }
}

async function deleteVarinha(req, res) {
  const id = req.params.id;
  const query = 'DELETE FROM varinhas WHERE id=$1';

  try {
    const result = await pool.query(query, [id]);
    if (result.rowCount > 0) {
      res.send('Varinha deletada com sucesso');
    } else {
      res.status(404).send('Varinha não encontrada');
    }
  } catch (err) {
    console.error('Erro ao deletar varinha:', err);
    res.status(500).send('Erro ao deletar varinha');
  }
}

module.exports = { createVarinha, getAllVarinhas, updateVarinha, deleteVarinha };
