import React from 'react';
import './MoviesCard.css';
import CardButton from '../CardButton/CardButton';

import { durationConverter } from "../../utils/filter";

function MoviesCard({
    key,
    saved,
    movies,
    movie,
    isSavedMovies,
    handleSaveMovie,
    handleDeleteMovie,
    savedMovies,
}) {

    function handleCardClick() {
        if (saved) {
            handleDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
        } else {
            handleSaveMovie(movie);
        }
    }

    function handleDelete() {
        handleDeleteMovie(movie);
    }

    //   const cardLikeButtonClassName = `${
    //     saved ? "card__like-button card__like-button_active" : "card__like-button"
    //   }`;

    return (
        <article className='movie-card'>
            <a href={movie.trailerLink} className='movie-card__link' target='blank'>
                <img
                    src={isSavedMovies ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`}
                    className='movie-card__image'
                    alt={movie.nameRU}
                />
            </a>
            <div className='movie-card__title'>
                <h2 className='movie-card__name'>{movie.nameRU}</h2>
                {isSavedMovies ?
                    (<CardButton
                        saved={saved}
                        isSaved={movie.isSaved}
                        onClick={handleCardClick}
                    />) : (
                        <CardButton
                            saved={saved}
                            isSaved={movie.isSaved}
                            onClick={handleDelete}
                        />
                    )}
            </div>
            <p className='movie-card__duration'>{durationConverter(movie.duration)}</p>
        </article>
    );
}

export default MoviesCard;