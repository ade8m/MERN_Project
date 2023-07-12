const mongoose = require('mongoose');

exports.createSociete = async (req, res) => {
  try {
    const mainDb = mongoose.connection.useDb('Project');

    // Get the company name from the request body
    const companyName = req.body.nom.toLowerCase(); // Use lowercase for database name (e.g., "sts" instead of "sts")

    // Create a new company database within the main database
    const companyDb = mainDb.useDb(companyName);

    // Create a new company collection inside the company's database
    const Company = companyDb.model('Company', {
      nom: { type: String, unique: true },
      address: { type: String },
      Email: { type: String, unique: true },
      password: { type: String },
    });

    // Create a new company document
    const newSociete = new Company({
      nom: req.body.nom,
      address: req.body.address,
      Email: req.body.email,
      password: req.body.password,
    });

    await newSociete.save();

    res.status(200).json(newSociete);
    console.log('Societe created!');
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.login = async (req,res) =>{

        try {
          const mainDb = mongoose.connection.useDb('Project');
      
          // Get the entered company name, email, and password from the request body
          const { companyName, email, password } = req.body;
      
          // Find the company in the main database
          const Company = mainDb.model('Company', {
            nom: { type: String, unique: true },
            address: { type: String },
            Email: { type: String, unique: true },
            password: { type: String },
          });
      
          const company = await Company.findOne({ nom: companyName.toLowerCase() });
      
          if (!company) {
            return res.status(404).json({ message: 'Company not found' });
          }
      
          // Verify the email and password
          if (company.Email === email && company.password === password) {
            // Grant access to the company's database
            const companyDbName = companyName.toLowerCase();
            const companyDb = mainDb.useDb(companyDbName);
      
            // Additional logic for granting access to the company's database
      
            return res.status(200).json({ message: 'Login successful' });
          }
      
          return res.status(401).json({ message: 'Invalid email or password' });
        } catch (error) {
          return res.status(500).json({ message: 'Internal server error' });
        }    

}