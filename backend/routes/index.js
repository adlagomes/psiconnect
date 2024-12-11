const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professionalControllers.js');
const clientController = require('../controllers/clientController.js');
const sessionController = require('../controllers/sessionController.js');
const auth = require('../middleware/auth.js');

// Rotas para profissionais
router.post('/professionals', professionalController.createProfessional);
router.post('/register', professionalController.register);
router.post('/login', professionalController.login);

// Rotas para clientes
router.post('/clients/register', clientController.register);
router.post('/clients/login', clientController.login);

// Rotas para sessões
router.post('/sessions', auth, sessionController.createSession);
router.get('/sessions/:professionalId', auth, sessionController.getSessionsByProfessional);
router.put('/sessions/:id', auth, sessionController.updateSessionStatus);
router.delete('/sessions/:id', auth, sessionController.deleteSession);

router.get('/', (req, res) => {
  res.send('PsiConnect API');
});

module.exports = router;