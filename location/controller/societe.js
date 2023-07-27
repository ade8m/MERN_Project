const mongoose = require('mongoose');

const Admin = require('../models/admin');
const company = require('../models/location');

exports.createCompany = async (req, res) => {
  try {
    const { name, address, adminUsername, adminPassword } = req.body;

    

  
    const companyCollectionName = name.toLowerCase();
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
      
    });
    await newCompanyData.save();

    // Create a new admin for the company
    const admin = new Admin({
      username: adminUsername,
      password: adminPassword,
      companyId: newCompanyData._id,
    });

    await admin.save();
    newCompanyData.admins.push(admin._id);
    await newCompanyData.save();

    res.status(200).json({ message: 'Company created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req,res)=>{
   try {
    const { username, password } = req.body;


    const admin = await Admin.findOne({ username, password, companyId: { $exists: true } });

    if (!admin) {
     
      return res.status(401).json({ error: 'Company not found or invalid credentials' });
    }
    
    // Use the dynamically created model to find the company in its collection
    const CompanyModel = mongoose.model(admin.companyId.toLowerCase(), companySchema);
    const company = await CompanyModel.findOne({ _id: admin.companyId });

    if (!company) {
    return res.status(404).json({ error: 'Company not found' });
  }

  res.status(200).json({ message: 'Login successful', company: company.name });

   } catch (error) {
    res.status(400).json({ error: error.message });
   }
};

