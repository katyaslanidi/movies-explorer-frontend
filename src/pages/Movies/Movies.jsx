import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';

import { filterMovies, filterDuration } from "../../utils/filter";
import * as movies from "../../utils/MoviesApi";

function Movies({
    savedMovies,
    isLoggedIn,
    handleDeleteMovie,
    handleSaveMovie,
}) {

    const [isLoading, setIsLoading] = useState(false);

    const [initialCardsMovies, setInitialCardsMovies] = useState([]);
    const [isShortFilm, setIsShortFilm] = useState(false);

    const [isReqError, setisReqError] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    const [filteredMovies, setFilteredMovies] = useState([]);

    const handleUpdateFilteredMovies = (movies, query, short) => {
        const moviesCardList = filterMovies(movies, query, short);
        setInitialCardsMovies(moviesCardList);
        setFilteredMovies(short ? filterDuration(moviesCardList) : moviesCardList);
        localStorage.setItem("movies", JSON.stringify(moviesCardList));
        localStorage.setItem("allMovies", JSON.stringify(movies));
    }

    const handleShortFilmToggle = () => {
        setIsShortFilm(!isShortFilm);
        if (!isShortFilm) {
            if (filterDuration(initialCardsMovies).length === 0) {
                setFilteredMovies(filterDuration(initialCardsMovies));
            } else {
                setFilteredMovies(filterDuration(initialCardsMovies));
            }
        } else {
            setFilteredMovies(initialCardsMovies);
        }
        localStorage.setItem("shortMovies", !isShortFilm);
    }

    const handleSearchMoviesFilms = (query) => {
        localStorage.setItem("movieSearch", query);
        localStorage.setItem("shortMovies", isShortFilm);

        if (localStorage.getItem("allMovies")) {
            const movies = JSON.parse(localStorage.getItem("allMovies"));
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
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    // Получение короткомеражек из localStorage
  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setIsShortFilm(true);
    } else {
      setIsShortFilm(false);
    }
  }, []);

  // Получение списка фильмов из localStorage
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialCardsMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  // Проверка, были ли найдены фильмы по запросу
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
                    isShortFilm={isShortFilm}
                />
                <MoviesCardList
                    movies={filteredMovies}
                    isLoading={isLoading}
                    isSavedMovies={false}
                    isReqError={isReqError}
                    isNotFound={isNotFound}
                    savedMovies={savedMovies}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;