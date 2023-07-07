const user = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.registre = (req, res) => {
  const { password, Email, Nom } = req.body;

  if (password.length < 6) {
    res.status(400).json({ message: "Password must be at least 6 characters" });
    return;
  }

  bcrypt.hash(password, 10)
    .then(async (hash) => {
      try {
        const newUser = await user.create({
          password: hash,
          Email,
          Nom,
        });

        const token = jwt.sign({ userId: newUser.id }, process.env.secret_key);
        // Store the token in the database
        newUser.token = token;
        await newUser.save();

        return res.status(200).json({ token });
      } catch (error) {
        return res.status(400).json({ error });
      }
    })
    .catch((error) => {
      return res.status(500).json({ error: "An error occurred" });
    });
};


exports.login = async (req, res) => {
  const { Email, password } = req.body;

  if (!Email || !password) {
    return res.status(400).json({
      message: "Email or password not provided",
    });
  }

  try {
    const usr = await user.findOne({ Email });

    if (!usr) {
      return res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      });
    }

    const isPassword = await bcrypt.compare(password, usr.password);

    if (isPassword) {
      const token = jwt.sign({ userId: usr.id }, process.env.secret_key);
      return res.status(200).json({ message: "Login successful!", token });
    } else {
      return res.status(400).json({ message: "Incorrect password" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};
