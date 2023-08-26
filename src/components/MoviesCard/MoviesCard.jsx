import React from 'react';
import './MoviesCard.css';
import CardButton from '../CardButton/CardButton';

function MoviesCard({ movie, saved }) {
    return (
        <article className='movie-card'>
            <a href='https://youtu.be/__2oZSM1l1Q' className='movie-card__link' target='blank'>
                <img src={movie.image} className='movie-card__image' alt={movie.name}></img>
            </a>
            <div className='movie-card__title'>
                <h2 className='movie-card__name'>{movie.name}</h2>
                <CardButton saved={saved} isSaved={movie.isSaved} />
            </div>
            <p className='movie-card__duration'>{movie.duration}</p>
        </article>
    );
}

export default MoviesCard;