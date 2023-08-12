import React from 'react';
import './MoreMoviesButton.css';

function MoreMoviesButton(props) {
    return (
        <section className='more-movies'>
            <button 
                className={`
                    more-movies__button
                    ${props.hasMoreMovies ? '': 'more-movies__button_hidden'}
                `}>
            {`${props.hasMoreMovies ? 'Ещё': ''}`}
            </button>
        </section>
    );
}

export default MoreMoviesButton;