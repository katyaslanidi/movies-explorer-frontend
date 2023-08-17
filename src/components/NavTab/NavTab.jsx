import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css';

function NavTab() {
    return (
        <section className='navtab'>
            <ul className='navtab__links'>
                <li>
                    <Link to='about-project' className='navtab__link'>О проекте</Link>
                </li>
                <li>
                    <Link to='techs' className='navtab__link'>Технологии</Link>
                </li>
                <li>
                    <Link to='about-me' className='navtab__link'>Студент</Link>
                </li>
            </ul>
        </section>
    );
}

export default NavTab;