import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './SearchForm.css';

function SearchForm({
    handleSearchMoviesFilms,
    handleShortFilmToggle,
    isShortFilm,
}) {

    const [isQueryError, setIsQueryError] = useState(false);
    const [query, setQuery] = useState("");
    const location = useLocation();

    const handleChangeInputQuery = (e) => {
        setQuery(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (query.trim().length === 0) {
            setIsQueryError(true);
        } else {
            setIsQueryError(false);
            handleSearchMoviesFilms(query);
        }
    }

    useEffect(() => {
        if (
            location.pathname === "/movies" &&
            localStorage.getItem("movieSearch")
        ) {
            const localQuery = localStorage.getItem("movieSearch");
            setQuery(localQuery);
        }
    }, [location]);

    return (
        <section className='search-form'>
            <form className='search-form__form' name='search-form' onSubmit={handleFormSubmit}>
                <fieldset className='search-form__container'>
                    <input
                        type='text'
                        name='search-movie'
                        id='search-movie'
                        className='search-form__input'
                        placeholder='Фильм'
                        required
                        onChange={handleChangeInputQuery}
                        value={query || ""}
                    />
                    <button type='submit' className='search-form__button' />
                </fieldset>
                <div className='filter-checkbox'>
                    <label className='filter-checkbox__switch' htmlFor='checkbox'>
                        <input
                            type='checkbox'
                            id='checkbox'
                            className='filter-checkbox__checkbox'
                            onChange={handleShortFilmToggle}
                            checked={!isShortFilm}
                        />
                        Короткометражки
                    </label>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;