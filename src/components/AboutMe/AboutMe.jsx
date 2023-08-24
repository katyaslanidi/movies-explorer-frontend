import React from 'react';
import './AboutMe.css';
import myPic from '../../images/my-pic.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <img className='about-me__image' src={myPic} alt='Фото студента Я.Практикума' />
                <div className='about-me__content'>
                    <h3 className='about-me__name'>Екатерина</h3>
                    <p className='about-me__profession'>Фронтенд-разработчик, 21 год</p>
                    <p className='about-me__text'>Я живу в Москве, обучаюсь в университете "МИСиС" по направлению "Прикладная информатика". Be6-разработкой я начала интересоваться в процессе обучения в университете и решила дальше развиваться в данной сфере. B веб-разработке меня привлекают неограниченные возможности и постоянное развитие, ведь всегда можно сделать интерфейс лучше и интересней.</p>
                    <a className='about-me__git' href='https://github.com/katyaslanidi' target='_blank' rel="noreferrer">Github</a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;