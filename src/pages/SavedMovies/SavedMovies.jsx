import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import { filterMovies, filterDuration } from "../../utils/filter";
function SavedMovies({
    isLoggedIn,
    handleDeleteMovie,
    savedMovies,
}) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [isShortFilm, setisShortFilm] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    function handleSearchMoviesFilms(query) {
        setSearchQuery(query);
    }
    function handleShortFilmToggle() {
        setisShortFilm(!isShortFilm);
    }
    useEffect(() => {
        const moviesCardList = filterMovies(savedMovies, searchQuery);
        setFilteredMovies(
            isShortFilm ? filterDuration(moviesCardList) : moviesCardList
        );
    }, [savedMovies, isShortFilm, searchQuery]);
    useEffect(() => {
        if (filteredMovies.length === 0) {
            setIsNotFound(true);
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