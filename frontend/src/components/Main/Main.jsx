import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <div className="banner">
        <h1>Bem-vindo ao PsiConnect</h1>
        <p>Conectando Profissionais e Clientes</p>
        <div className="actions">
          <a href="/login" className="btn">Login</a>
          <a href="/register" className="btn">Register</a>
        </div>
      </div>
    </main>
  );
};

export default Main;
