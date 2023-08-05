import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <section className='navtab'>
            <ul className='navtab__links'>
                <li>
                    <p className='navtab__link'>О проекте</p>
                </li>
                <li>
                    <p className='navtab__link'>Технологии</p>
                </li>
                <li>
                    <p className='navtab__link'>Студент</p>
                </li>
            </ul>
        </section>
    );
}

export default NavTab;