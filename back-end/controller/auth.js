const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Admin = require('../Models/admin');
const Societe = require('../Models/societe');

exports.register = async (req, res) => {
  try {
    const { name, address, adminUsername, adminPassword } = req.body;

    // Create a new admin for the company
    const admin = new Admin({
      username: adminUsername,
      password: adminPassword,
      companyName: name,
    });

    // Save the admin to the database
    await admin.save();

    // Create a new societe with nom and address
    const societe = new Societe({
      nom: name,
      adress: address,
      admin: admin._id, // Associate the admin with the societe
    });

    // Save the societe to the database
    await societe.save();

    res.status(200).json({ message: 'Company created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const admin = await Admin.findOne({ username, password });

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found or invalid credentials' });
    }

    
    const requestedCompany = admin.companyName;

   
    const societe = await Societe.findOne({ nom: requestedCompany });

    if (!societe) {
      return res.status(404).json({ error: 'Societe not found' });
    }
      // Generate a JWT token with the admin's ID and other information as payload
      const token = jwt.sign({ adminId: admin._id, isAdmin: admin.isAdmin }, process.env.secret_key, {
        expiresIn: '1h', // You can set the token expiration time as per your requirement
      });
  

    
    res.status(200).json({ message: 'Login successful',token,societe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
