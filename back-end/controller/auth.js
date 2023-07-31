const mongoose = require('mongoose');

const Admin = require('../Models/admin');
const Company = require ('../Models/location');
const companySchema = require('../Models/companySchema');



exports.register = async (req, res) => {
  try {
    const { name, address, adminUsername, adminPassword } = req.body;

    const companyCollectionName = name.toLowerCase();

    // Create the company-specific collection in the main database
    const CompanyModel = mongoose.model(
      companyCollectionName,
      companySchema
    );

    // Save the company's information to the company-specific collection
    const newCompanyData = new CompanyModel({
      name,
      address,
      admins: [], 
    });
    await newCompanyData.save();

    // Create a new admin for the company
    const admin = new Admin({
      username: adminUsername,
      password: adminPassword,
      companyName: name, 
    });
    await admin.save();
    // Associate the admin with the new company
    if (!newCompanyData.admins) {
      newCompanyData.admins = [];
    }

    newCompanyData.admins.push(admin._id);
    await newCompanyData.save();

  

    res.status(200).json({ message: 'Company created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the admin based on the provided username and password
    const admin = await Admin.findOne({ username, password });

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found or invalid credentials' });
    }

    // Retrieve the associated company name from the admin's companyName field
    const requestedCompany = admin.companyName;

    // Use the requestedCompany directly to construct the collection name
    const CompanyModel = mongoose.model(requestedCompany.toLowerCase(), companySchema);

    // Find the company in its specific collection based on the requestedCompany name
    const company = await CompanyModel.findOne({ name: requestedCompany });

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const companyFoundName = company.name;

    res.status(200).json({ message: 'Login successful', company: companyFoundName });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
