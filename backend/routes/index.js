const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professionalControllers.js');

router.post('/professionals', professionalController.createProfessional);
router.post('/register', professionalController.register);
router.post('/login', professionalController.login);

router.get('/', (req, res) => {
  res.send('PsiConnect API');
});

module.exports = router;