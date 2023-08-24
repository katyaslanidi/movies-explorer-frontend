import React from 'react';
import { useState } from 'react';
import './CardButton.css';

function CardButton(props) {
    const [isSaved, setIsSaved] = useState(props.isSaved);
    const saved = props.saved;
    const handleLikeClick = () => {
        setIsSaved(!isSaved)
    }
    const handleDeleteClick = () => {
    }
    return (
        <>
            {
                saved ? (
                    <button
                        className='movie-card__delete-button'
                        type='button'
                        onClick={handleDeleteClick}
                    ></button>
                ) : (
                    <button
                        className={
                            `movie-card__save-button
                            ${isSaved ? 'movie-card__save-button_liked' : ''}`
                        }
                        type='button'
                        onClick={handleLikeClick}
                    ></button>
                )
            }
        </>
    );
}

export default CardButton;