const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional' }
});

// Middleware para hashear a senha antes de salvar
ClientSchema.pre('save', async function(next) {
  const client = this;
  if (!client.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    client.password = await bcrypt.hash(client.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Método para verificar a senha
ClientSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;
