const Session = require('../models/Session.js');

// Criar uma nova sessão
exports.createSession = async (req, res) => {
  const session = new Session(req.body);
  try {
    await session.save();
    res.status(201).send(session);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obter todas as sessões de um profissional
exports.getSessionsByProfessional = async (req, res) => {
  try {
    const sessions = await Session.find({ professional: req.params.professionalId }).populate('professional');
    res.send(sessions);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualizar o status de uma sessão
exports.updateSessionStatus = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, notes: req.body.notes, date: req.body.date },
      { new: true });
    if (!session) {
      return res.status(404).send({ message: 'Session not found' });
    }
    res.send(session);
  } catch (error) {
    res.status(400).send({ message: 'Error updating session' ,error});
  }
};

// Deletar uma sessão
exports.deleteSession = async (req, res) => {
  try {
    await Session.findByIdAndDelete(req.params.id);
    res.send({ message: 'Session deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};
