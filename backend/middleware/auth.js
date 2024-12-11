const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, 'secretKey'); // Certifique-se de usar a mesma chave secreta usada para gerar o token
    req.user = decoded; // Adiciona o id do usuário decodificado ao objeto de requisição
    next();
  } catch (error) {
    res.status(401).send({ message: 'Invalid token' });
  }
};

module.exports = auth;