import React from 'react';
// import { useState } from 'react';
import './CardButton.css';

function CardButton(props) {
    // const [isSaved, setIsSaved] = useState(props.isSaved);
    // const saved = props.saved;
    // const handleLikeClick = () => {
    //     setIsSaved(!isSaved)
    // }
    return (
        <>
            {
                props.saved ? (
                    <button
                        className='movie-card__delete-button'
                        type='button'
                        onClick={props.onClick}
                    ></button>
                ) : (
                    <button
                        className={
                            `movie-card__save-button
                            ${props.isSaved ? 'movie-card__save-button_liked' : ''}`
                        }
                        type='button'
                        onClick={props.onClick}
                    ></button>
                )
            }
        </>
    );
}

export default CardButton;