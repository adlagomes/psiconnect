const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

const connectDB = async () => {
  try { await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas'); 
} catch (error) {
    console.error('Failed to connect to MongoDB Atlas', error);
}};

connectDB();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

const indexRouter = require('./routes/index.js');
app.use(express.json()); // Adicionar para analisar JSON automaticamente
app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.send('Hello PsiConnect!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});