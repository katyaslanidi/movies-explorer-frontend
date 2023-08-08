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
            <div className='techs__techs-container'>
                <span className='techs__techs-container_techs'>HTML</span>
                <span className='techs__techs-container_techs'>CSS</span>
                <span className='techs__techs-container_techs'>JS</span>
                <span className='techs__techs-container_techs'>React</span>
                <span className='techs__techs-container_techs'>Git</span>
                <span className='techs__techs-container_techs'>Express.js</span>
                <span className='techs__techs-container_techs'>mongoDB</span>
            </div>
        </section>
    );
}

export default Techs;