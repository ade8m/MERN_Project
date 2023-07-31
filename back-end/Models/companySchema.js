
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  address: { type: String },
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],
  databaseName: { type: String, unique: true },
});

module.exports = companySchema;
