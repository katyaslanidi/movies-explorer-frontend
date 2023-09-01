import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader';

import {
    SHOW_MORE_DECKTOP,
    SHOW_MORE_TABLET,
    SHOW_MORE_MOBILE,
} from "../../utils/constants";

function MoviesCardList({
    movies,
    isLoading,
    isSavedMovies,
    isReqError,
    isNotFound,
    savedMovies,
    handleSaveMovie,
    handleDeleteMovie,
}) {
    const currentPath = useLocation().pathname;

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
            {isLoading && <Preloader />}
            {isNotFound && !isLoading && (
                <SearchError errorText={"Ничего не найдено"} />
            )}
            <ul className='cards__list'>
                {
                    movies.map((movie, i) => {
                        return (
                            <li key={i} className='cards__item'>
                                <MoviesCard
                                    movie={movie}
                                    saved={saved}
                                />
                            </li>
                        );
                    })
                }
            </ul>
            <section className='more-movies'>
                <button
                    className={`
                    more-movies__button
                    ${ ? '' : 'more-movies__button_hidden'}
                `}
                    type='button'
                >
                    {`${ ? 'Ещё' : ''}`}
                </button>
            </section>
        </section>
    );
}

export default MoviesCardList;