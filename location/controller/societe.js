const mongoose = require('mongoose');
const Company = require('../models/location');
const Admin = require('../models/admin');

exports.createCompany = async (req, res) => {
  try {
    const { name, address, adminUsername, adminPassword } = req.body;
    const databaseName = `${name.toLowerCase().replace(/\s/g, '_')}`;
    const companyDb = mongoose.createConnection(process.env.MONGO);

    
    const CompanyModel = companyDb.model('Company', Company.schema);
    const AdminModel = companyDb.model('Admin', Admin.schema);
   
    // Create a new company
    const company = new CompanyModel({
      name,
      address,
      databaseName,
    });
   
    // Save the company to the main database
    await company.save(); 
    // Create a new admin
    const admin = new AdminModel({
      username: adminUsername,
      password: adminPassword,
      company: company._id,
    });

    // Save the admin to the company-specific database
    await admin.save();
    
    // Associate the admin with the company
    company.admins.push(admin._id);
    await company.save();

    res.status(200).json({ message: 'Company created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
