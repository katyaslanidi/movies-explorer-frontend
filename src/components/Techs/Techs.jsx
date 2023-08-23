import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs__text-container'>
                <h3 className='techs__text-container_title'>7 технологий</h3>
                <p className='techs__text-container_text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className='techs__techs-container'>
                <li className='techs__techs-container_techs'>HTML</li>
                <li className='techs__techs-container_techs'>CSS</li>
                <li className='techs__techs-container_techs'>JS</li>
                <li className='techs__techs-container_techs'>React</li>
                <li className='techs__techs-container_techs'>Git</li>
                <li className='techs__techs-container_techs'>Express.js</li>
                <li className='techs__techs-container_techs'>mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;