import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs__container'>
                <h3 className='techs__subtitle'>7 технологий</h3>
                <p className='techs__text'>Ha курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className='techs__techs-container'>
                <li className='techs__item'>HTML</li>
                <li className='techs__item'>CSS</li>
                <li className='techs__item'>JS</li>
                <li className='techs__item'>React</li>
                <li className='techs__item'>Git</li>
                <li className='techs__item'>Express.js</li>
                <li className='techs__item'>mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;