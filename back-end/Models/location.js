const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  address: { type: String },
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],
  databaseName: { type: String, unique: true },
  Ncontrat:{type:String},
  Nfacture:{type:String},
  TVA:{type:String},
  Description:{type:String},
  Anneé:{type:String}
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
