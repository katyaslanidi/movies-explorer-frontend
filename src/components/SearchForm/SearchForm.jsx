import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__form' name='search-form'>
                <fieldset className='search-form__container'>
                    <input
                        type='text'
                        name='search-movie'
                        id='search-movie'
                        className='search-form__input'
                        placeholder='Фильм'
                        required
                    />
                    <button type='submit' className='search-form__button' />
                </fieldset>
                <div className='filter-checkbox'>
                    <label className='filter-checkbox__switch' htmlFor='checkbox'>
                        <input
                            type='checkbox'
                            id='checkbox'
                            className='filter-checkbox__checkbox'
                        />
                        Короткометражки
                    </label>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;