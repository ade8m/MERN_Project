const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  companyName: { type: String }, 
  isAdmin :{type: Boolean,
            default:false},
 
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
