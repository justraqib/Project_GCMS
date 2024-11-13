// models/Data.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  message: { type: String, required: true },
});

module.exports = mongoose.model('Data', dataSchema);
