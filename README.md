# Frontend для дипломного проекта курса «Веб-разработчик» от «Яндекс Практикум».

## Вот что было сделано:
* настроена инфраструктура и создан сервер на express;
* подключена база данных, созданы схемы и модели ресурсов API;
* реализовано логирование, аутентификация и авторизация на сервере;
* бэкенд задеплоен на Яндекс Облако;
* свёрстаны компоненты на React, разметка портирована в его формат;
* описана логика и вёрстка страниц регистрации, логина, редактирования профиля, сохранённых фильмов;
* реализованы асинхронные GET- и POST-запросы к API;
* проработаны авторизованные и неавторизованные состояния, сохранение фильмов в профиле;
* полученные фильмы фильтруются на стороне клиента.

## Технологии:
* HTML5
* CCS3
* React
* Express
* MongoDB
* NodeJS
* API
* Nginx
* JWT
* Postman

## Функционал:
* Регистрация и авторизация пользователей
* Поиск фильмов по ключевым словам
* Фильтрация фильмов по длительности
* Сохрание фильмов в избранное
* Редактирование профиля

## Ссылки:
* [Макет](https://www.figma.com/file/dC6grKCZXgpjAuFG23CKWt/dark-3?type=design&node-id=891%3A3857&mode=design&t=XEKoKGH9zVYprwrK-1)
* [Репозиторий Backend](https://github.com/katyaslanidi/movies-explorer-api)

## Установка и запуск проекта:
1. Клонировать репозиторий: `git clone https://github.com/katyaslanidi/movies-explorer-frontend`
2. Установить зависимости: `npm install`
3. Запустить: `npm run start`

### Роуты

| Роут         | Описание                                     |
|--------------|----------------------------------------------|
|/             |Отображается страница «О проекте»             |
|/movies       |Отображается страница «Фильмы»                |
|/saved-movies |Отображается страница «Сохранённые фильмы»    |
|/profile      |Отображается страница с профилем пользователя |
|/signin       |Отображается страница авторизации             |
|/signup       |Отображается страница регистрации             |
|/*            |Отображается страница не найдено              |

## Чеклист:
[Критерии диплома веб-разработчика](https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html#backend)

### Статус проекта: завершен