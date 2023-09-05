import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

import {
    SHOW_MORE_DECKTOP,
    SHOW_MORE_TABLET,
    SHOW_MORE_MOBILE,
} from "../../utils/constants";

function MoviesCardList({
    movies,
    isSavedMovies,
    savedMovies,
    handleSaveMovie,
    handleDeleteMovie,
}) {
    const currentPath = useLocation().pathname;
    const [shownMovies, setShownMovies] = useState(0);

    // Определяет количество отображаемых карточек в зависимости от размера экрана
    const shownCount = () => {
        const display = window.innerWidth;
        if (display > 1024) {
            setShownMovies(12);
        } else if (display > 750) {
            setShownMovies(8);
        } else {
            setShownMovies(5);
        }
    }

    useEffect(() => {
        shownCount();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("resize", shownCount);
        }, 500);
    });

    // Увеличивает количество отображаемых карточек при нажатии на кнопку "Ещё"
    const showMore = () => {
        const display = window.innerWidth;
        if (display > 1024) {
            setShownMovies(shownMovies + SHOW_MORE_DECKTOP);
        } else if (display > 750) {
            setShownMovies(shownMovies + SHOW_MORE_TABLET);
        } else {
            setShownMovies(shownMovies + SHOW_MORE_MOBILE);
        }
    }

    // Возвращает сохраненную карточку фильма из массива сохраненных фильмов
    const getSavedMovieCard = (savedMovies, card) => {
        return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
    }

    return (
        <section className={`cards
            ${currentPath === '/saved-movies'
                ? 'cards-saved' : ''}`}
        >
            {/* {isLoading && <Preloader />}
            {isNotFound && !isLoading && (
                <SearchError errorText={"Ничего не найдено"} />
            )} */}
            {currentPath === "/saved-movies" ? (
                <ul className='cards__list'>
                    {
                        movies.map(movie => (
                            <MoviesCard
                                key={isSavedMovies ? movie._id : movie.id}
                                saved={getSavedMovieCard(savedMovies, movie)}
                                movies={movies}
                                movie={movie}
                                isSavedMovies={isSavedMovies}
                                handleSaveMovie={handleSaveMovie}
                                handleDeleteMovie={handleDeleteMovie}
                                savedMovies={savedMovies}
                            />
                        ))}
                </ul>
            ) : (
                <ul className='cards__list'>
                    {movies.slice(0, shownMovies).map(movie => (
                        <MoviesCard
                            key={isSavedMovies ? movie._id : movie.id}
                            saved={getSavedMovieCard(savedMovies, movie)}
                            movies={movies}
                            movie={movie}
                            isSavedMovies={isSavedMovies}
                            handleSaveMovie={handleSaveMovie}
                            handleDeleteMovie={handleDeleteMovie}
                            savedMovies={savedMovies}
                        />
                    )
                    )}
                </ul>
            )}
            <section className='more-movies'>
                {movies.length > shownMovies ? (
                    <button className='more-movies__button' onClick={showMore} type='button'>
                        Ещё
                    </button>
                ) : ('')}
            </section>
        </section>
    );
}

export default MoviesCardList;