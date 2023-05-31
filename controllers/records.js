const connection = require('../database.js');

// Function to execute SQL queries
const executeQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};

// Create a new record
const createRecord = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const query = 'INSERT INTO records (name, age, email) VALUES (?, ?, ?)';
    await executeQuery(query, [name, age, email]);
    res.json({ message: 'Record created successfully' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all records
const getAllRecords = async (req, res) => {
  try {
    const query = 'SELECT * FROM records';
    const records = await executeQuery(query);
    res.json(records);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a record
const updateRecord = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const { id } = req.params;
    const query = 'UPDATE records SET name = ?, age = ?, email = ? WHERE id = ?';
    await executeQuery(query, [name, age, email, id]);
    res.json({ message: 'Record updated successfully' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a record
const deleteRecord = async (req, res) => {
    try {
      const { id } = req.params;
      const query = 'DELETE FROM records WHERE id = ?';
      await executeQuery(query, [id]);
      res.json({ message: 'Record deleted successfully' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    createRecord,
    getAllRecords,
    updateRecord,
    deleteRecord
  };