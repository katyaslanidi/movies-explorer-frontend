import { SHORT_FILMS } from "./constants";
// Пересчёт длительности фильмов:
export function durationConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
}
// Определение короткометражки:
export function filterDuration(movies) {
    return movies.filter((movie) => movie.duration < SHORT_FILMS);
}

// Фильтрация по поисковому запросу:

export function filterMovies(movies, query) {
    const filterdMovies = movies?.filter((i) => {
        const { nameRU, nameEN } = i;
        const lowercaseQuery = query.toLowerCase();
        return (
            nameRU.toLowerCase().includes(lowercaseQuery)
            || nameEN.toLowerCase().includes(lowercaseQuery)
        );
    })

    return filterdMovies;
}