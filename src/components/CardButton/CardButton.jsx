import React from 'react';
import './CardButton.css';

function CardButton(props) {

    const cardLikeButtonClassName = `${props.saved
        ? "movie-card__save-button movie-card__save-button_liked" 
        : "movie-card__save-button"}`;

    return (
        <button
            className={cardLikeButtonClassName}
            type='button'
            onClick={props.onClick}
        ></button>
    );
}

export default CardButton;