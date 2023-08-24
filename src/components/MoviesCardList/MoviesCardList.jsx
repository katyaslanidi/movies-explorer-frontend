import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, saved }) {
    return (
        <section className='cards'>
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