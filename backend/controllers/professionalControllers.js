const Professional = require('../models/Professional');
const jwt = require('jsonwebtoken');

// Registra um novo profissional
exports.register = async (req, res) => {
  const professional = new Professional(req.body);
  try {
    await professional.save();
    res.status(201).send({ message: 'Professional registered seccessfully!' });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Autentica um profissional (login)
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const professional = await Professional.findOne({ email });
    if (!professional) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const isMatch = await professional.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const token = jwt.sign( { id: professional._id }, 'secretkey', { expiresIn: '12h'});
    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
}

// Cria um novo profissional
exports.createProfessional = async (req, res) => {
  const professional = new Professional(req.body);
  try {
    await professional.save();
    res.status(201).send(professional);
  } catch (error) {
    res.status(400).send(error);
  }
};