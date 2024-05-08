const pool = require('../config/dbConfig');

async function createBruxo(req, res) {
  const { nome, idade, casa, habilidade, status_sangue, patrono } = req.body;
  const query = 'INSERT INTO bruxos (nome, idade, casa, habilidade, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [nome, idade, casa, habilidade, status_sangue, patrono];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao criar bruxo:', err);
    res.status(500).send('Erro ao criar bruxo');
  }
}

async function getAllBruxos(req, res) {
  try {
    const result = await pool.query('SELECT * FROM bruxos');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao obter bruxos:', err);
    res.status(500).send('Erro ao obter bruxos');
  }
}

async function updateBruxo(req, res) {
  const id = req.params.id;
  const { nome, idade, casa, habilidade, status_sangue, patrono } = req.body;
  const query = 'UPDATE bruxos SET nome=$1, idade=$2, casa=$3, habilidade=$4, status_sangue=$5, patrono=$6 WHERE id=$7';
  const values = [nome, idade, casa, habilidade, status_sangue, patrono, id];

  try {
    const result = await pool.query(query, values);
    if (result.rowCount > 0) {
      res.send('Bruxo atualizado com sucesso');
    } else {
      res.status(404).send('Bruxo não encontrado');
    }
  } catch (err) {
    console.error('Erro ao atualizar bruxo:', err);
    res.status(500).send('Erro ao atualizar bruxo');
  }
}

async function deleteBruxo(req, res) {
  const id = req.params.id;
  const query = 'DELETE FROM bruxos WHERE id=$1';

  try {
    const result = await pool.query(query, [id]);
    if (result.rowCount > 0) {
      res.send('Bruxo deletado com sucesso');
    } else {
      res.status(404).send('Bruxo não encontrado');
    }
  } catch (err) {
    console.error('Erro ao deletar bruxo:', err);
    res.status(500).send('Erro ao deletar bruxo');
  }
}

module.exports = { createBruxo, getAllBruxos, updateBruxo, deleteBruxo };
