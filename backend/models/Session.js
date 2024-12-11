const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', required: true },
  client: { type: String, required: true }, // Podemos mudar isso para referenciar o modelo de Cliente se desejarmos
  date: { type: Date, required: true },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' },
  notes: { type: String }
});

const Session = mongoose.model('Session', SessionSchema);
module.exports = Session;
