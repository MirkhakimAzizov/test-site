import React from 'react';
import './App.css'
import Header from './Components/Header/header';
import Home from './Pages/Home';
import Footer from './Components/Footer/footer';

function App() {

  return (
    <>
      <Header />
      <main className="main bg-secondary bg-opacity-10">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
