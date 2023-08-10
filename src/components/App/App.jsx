// import './App.css';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
// import Promo from '../Promo/Promo';
// import NavTab from '../NavTab/NavTab';
// import AboutProject from '../AboutProject/AboutProject'
// import Techs from '../Techs/Techs';
// import AboutMe from '../AboutMe/AboutMe';
// import Portfolio from '../Portfolio/Portfolio';

function App() {
  return (
    <div className='page'>
      <Header />
      <SearchForm />
      {/* <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio /> */}
      <Footer />
    </div>
  );
}

export default App;
