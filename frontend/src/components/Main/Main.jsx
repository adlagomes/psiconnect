import React from 'react';
import './Main.css';

const Main = ({ openLoginModal, openRegisterModal }) => {
  return (
    <main className="main">
      <div className="banner">
        <h1>Bem-vindo ao PsiConnect</h1>
        <p>Conectando Profissionais e Clientes</p>
        <div className="actions">
        <button onClick={openLoginModal} className="btn">Login</button>
        <button onClick={openRegisterModal} className="btn">Register</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
