import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

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
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;