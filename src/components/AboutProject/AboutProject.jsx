import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__container'>
                <h3 className='about-project__container_title'>Дипломный проект включал 5 этапов</h3>
                <p className='about-project__container_text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className='about-project__container_title'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__container_text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about-project__time-line'>
                <span className='about-project__time-line_title'>1 неделя</span>
                <span className='about-project__time-line_title about-project__time-line_title-frontend'>4 недели</span>
                <span className='about-project__time-line__text'>Back-end</span>
                <span className='about-project__time-line__text'>Front-end</span>
            </div>
        </section>
    );
}

export default AboutProject;