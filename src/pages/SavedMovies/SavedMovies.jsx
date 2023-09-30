import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import { filterMovies, filterDuration } from "../../utils/filter";
import * as movies from "../../utils/MoviesApi";
import * as api from '../../utils/MainApi';

function SavedMovies({
  isLoggedIn,
  handleDeleteMovie,
  savedMovies,
}) {

  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isReqError, setisReqError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleUpdateFilteredMovies = (movies, query, short) => {
    const moviesCardList = filterMovies(movies, query, short);

    setFilteredMovies(moviesCardList);
    setFilteredMovies(short ? filterDuration(moviesCardList) : moviesCardList);

    localStorage.setItem("movies", JSON.stringify(moviesCardList));
    // localStorage.setItem("allMovies", JSON.stringify(movies));
    setSearchQuery(query);
  }

  const handleShortFilmToggle = (query) => {
    setIsShortFilm(isShortFilm);
    localStorage.setItem("movieSearch", query);
    localStorage.setItem("shortMovies", !isShortFilm);

    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      const moviesCardList = filterMovies(movies, query, isShortFilm);

      setFilteredMovies(isShortFilm ? filterDuration(moviesCardList) : moviesCardList);
      setIsShortFilm(!isShortFilm);
      setSearchQuery(query);

      localStorage.setItem("movies", JSON.stringify(moviesCardList));

      if (!isShortFilm) {
        if (filterDuration(movies).length === 0) {
          setFilteredMovies(filterDuration(movies));
        } else {
          setFilteredMovies(filterDuration(movies));
        }
      } else {
        setFilteredMovies(movies);
      }
    }
    handleSearchMoviesFilms(query);
  }

  const handleSearchMoviesFilms = (query) => {
    localStorage.setItem("movieSearch", query);
    localStorage.setItem("shortMovies", !isShortFilm);
    
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      handleUpdateFilteredMovies(movies, query, isShortFilm);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((cardsData) => {
          handleUpdateFilteredMovies(cardsData, query, isShortFilm);
          setisReqError(false);
        })
        .catch((err) => {
          setisReqError(true);
          console.log(err);
        })
        .finally((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, searchQuery);

    setFilteredMovies(
      isShortFilm ? filterDuration(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortFilm, searchQuery]);

  // useEffect(() => {
  //   // const movies = localStorage.getItem("allMovies");
  //   // setFilteredMovies(movies)

  //   const searchMovies = localStorage.getItem("movieSearch");
  //   setSearchQuery(searchMovies);

  //   const checkbox = JSON.parse(localStorage.getItem("shortMovies"));
  //   const query = localStorage.getItem("movieSearch");
  //   if (checkbox === true) {
  //     handleShortFilmToggle(query);
  //     // setIsShortFilm(false);
  //   } else if (checkbox === false) {
  //     handleSearchMoviesFilms(query);
  //     // setIsShortFilm(false);
  //   }

  //   if (localStorage.getItem("shortMovies")) {
  //     setIsShortFilm(false);
  //   } else {
  //     setIsShortFilm(true);
  //   }
  // }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main>
        <SearchForm
          handleSearchMoviesFilms={handleSearchMoviesFilms}
          handleShortFilmToggle={handleShortFilmToggle}
          isShortFilm={!isShortFilm}
        />
        <MoviesCardList
          movies={filteredMovies}
          isSavedMovies={true}
          savedMovies={savedMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;