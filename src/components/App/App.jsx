// import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMoviesButton from '../MoreMoviesButton/MoreMoviesButton';
import { moviesArr, moviesSavedArr } from '../../utils/constants';
// import Promo from '../Promo/Promo';
// import NavTab from '../NavTab/NavTab';
// import AboutProject from '../AboutProject/AboutProject'
// import Techs from '../Techs/Techs';
// import AboutMe from '../AboutMe/AboutMe';
// import Portfolio from '../Portfolio/Portfolio';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setMovies(moviesSavedArr)
    }, 1000)
  }, [])

  // const arr = Object.keys(moviesArr)

  return ( 
    <div className='page'>

      {/* страница savedmovies */}
      <Header />
      <SearchForm />
      <MoviesCardList
        movies={movies}
        saved={true}
      />
      <MoreMoviesButton
        hasMoreMovies={false}
      />

      {/* страница movies */}   
      {/* <Header />
      <SearchForm />
      <MoviesCardList
        movies={movies}
        saved={false}
      />
      <MoreMoviesButton 
        hasMoreMovies={true}
      /> */}


      {/* страница main */}
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
