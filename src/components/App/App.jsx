// import './App.css';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
// import Main from '../../pages/Main/Main';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject'

function App() {
  return (
    <div className='page'>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Footer />
    </div>
  );
}

export default App;
