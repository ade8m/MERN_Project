const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
