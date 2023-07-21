const mongoose = require('mongoose');

const Admin = require('../models/admin');// Import the Company model


exports.createCompany = async (req, res) => {
  try {
    const { name, address, adminUsername, adminPassword } = req.body;

    // Generate a unique database name for the company and convert to lowercase
    const databaseName = name.toLowerCase();

  

    // Create a new collection with the name of the company and store its information
    const companyCollectionName = databaseName;
    const companySchema = new mongoose.Schema({
      
       name: { type: String },
      address: { type: String },
   admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],
      databaseName: { type: String },
    });

    // Create the company-specific collection in the main database
    const CompanyModel = mongoose.model(
      companyCollectionName,
      companySchema
    );

    // Save the company's information to the company-specific collection
    const newCompanyData = new CompanyModel({
      name,
      address,
      admins: [], // Add admins associated with the company if needed
      databaseName,
    });
    await newCompanyData.save();

    // Create a new admin for the company
    const admin = new Admin({
      username: adminUsername,
      password: adminPassword,
    });

    await admin.save();

    res.status(200).json({ message: 'Company created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};