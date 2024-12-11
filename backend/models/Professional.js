const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ProfessionalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Middleware para hashear a senha antes de salvar
ProfessionalSchema.pre('save', async function(next) {
  const professional = this;
  if (!professional.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    professional.password = await bcrypt.hash(professional.password, salt);
    next();
  } catch (error) {
      next(error);
  }
});

// Método para verificar a senha
ProfessionalSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Professional = mongoose.model('Professional', ProfessionalSchema);
module.exports = Professional;