import React, { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import LoginModal from './components/LoginModal/LoginModal'
import RegisterModal from './components/RegisterModal/RegisterModal'
import './App.css'

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false)
  const [isRegisterOpen, setRegisterOpen] = useState(false)

  return (
    <div className='App'>
      <Header />
      <Main 
        openLoginModal={() => setLoginOpen(true)}
        openRegisterModal={() => setRegisterOpen(true)}
      />
      <Footer />
      {/* <button onClick={() => setLoginOpen(true)}>Login</button> */}
      {/* <button onClick={() => setRegisterOpen(true)}>Register</button> */}
      <LoginModal isOpen={isLoginOpen} onRequestClose={() => setLoginOpen(false)} />
      <RegisterModal isOpen={isRegisterOpen} onRequestClose={() => setRegisterOpen(false)} />
    </div>
  )
}

export default App