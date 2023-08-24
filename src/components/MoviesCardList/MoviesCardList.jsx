import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, saved }) {
    const currentPath = useLocation().pathname;

    return (
        <section className={`cards
            ${currentPath === '/saved-movies'
            ? 'cards-saved' : ''}`}
        >
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
        </section>
    );
}

export default MoviesCardList;