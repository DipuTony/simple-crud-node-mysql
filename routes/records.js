const express = require('express');
const router = express.Router();

const recordsController = require('../controllers/records');

// Create a new record
router.post('/', recordsController.createRecord);

// Get all records
router.get('/', recordsController.getAllRecords);

// Update a record
router.put('/:id', recordsController.updateRecord);

// Delete a record
router.delete('/:id', recordsController.deleteRecord);

module.exports = router;
