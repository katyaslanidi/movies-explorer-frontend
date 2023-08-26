import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoreMoviesButton from '../../components/MoreMoviesButton/MoreMoviesButton';
import Footer from '../../components/Footer/Footer';
import { moviesArr } from '../../utils/constants';

function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setMovies(moviesArr)
        }, 1000)
    }, [])

    return (
        <>
            <Header
                isLoggedIn='true'
            />
            <main>
                <SearchForm />
                <MoviesCardList
                    movies={movies}
                    saved={false}
                />
                <MoreMoviesButton
                    hasMoreMovies={true}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;