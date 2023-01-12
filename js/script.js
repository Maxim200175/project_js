"use strict";

/* let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number); */


/* let userName = 'John';


let userNumber = 25;


userNumber = 24;



let storeName = 'Dota 2';


let storeDescription = {
    budget: 10000,
    employees: ['Gaben', 'Gazar' , 'Mamon'],
    products: { 
        hook: 200,
        arcana: 300 
    },
    open: true 
}; */

const numberOfFilms = prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false 
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Насколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Насколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);