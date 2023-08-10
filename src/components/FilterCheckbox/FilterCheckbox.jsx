import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <section className='filter-checkbox'>
            <label className='filter-checkbox__switch' htmlFor='checkbox'>
                <input
                    type='checkbox'
                    id='checkbox'
                    className='filter-checkbox__checkbox'
                />
                Короткометражки
            </label>
        </section>
    );
}

export default FilterCheckbox;