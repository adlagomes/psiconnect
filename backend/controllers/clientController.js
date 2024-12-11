const Client = require('../models/Client.js');
const jwt = require('jsonwebtoken');

// Registrar um novo cliente
exports.register = async (req, res) => {
  const client = new Client(req.body);
  try {
    await client.save();
    res.status(201).send({ message: 'Client registered successfully!' });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Autenticar um cliente (login)
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const client = await Client.findOne({ email });
    if (!client) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const isMatch = await client.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: client._id }, 'secretKey', { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
};
