import React from 'react';
import { useLocation } from 'react-router-dom';
import './CardButton.css';


function CardButton(props) {

    const currentPath = useLocation().pathname;

    const cardLikeButtonClassName = `${props.saved
        ? "movie-card__save-button movie-card__save-button_liked" 
        : "movie-card__save-button"}`;

    return (
        <button
            className={`${currentPath === '/saved-movies' 
                ? 'movie-card__delete-button' 
                : cardLikeButtonClassName }`}
            type='button'
            onClick={props.onClick}
        ></button>
    );
}
export default CardButton;