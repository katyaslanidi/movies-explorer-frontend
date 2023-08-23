import React from 'react';
import './AboutMe.css';
import myPic from '../../images/my-pic.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <img className='about-me__container_image' src={myPic} alt='мое фото' />
                <div className='about-me__content'>
                    <h3 className='about-me__content_title'>Екатерина</h3>
                    <p className='about-me__content_subtitle'>Фронтенд-разработчик, 21 год</p>
                    <p className='about-me__content_text'>Я живу в Москве, обучаюсь в университете "МИСиС" по направлению "Прикладная информатика". Веб-разработкой я начала интересоваться в процессе обучения в университете и решила дальше развиваться в данной сфере. В веб-разработке меня привлекают неограниченные возможности и постоянное развитие, ведь всегда можно сделать интерфейс лучше и интересней.</p>
                    <a className='about-me__content_git' href='https://github.com/katyaslanidi' target='_blank' rel="noreferrer">Github</a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;