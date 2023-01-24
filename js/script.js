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

let numberOfFilms;

function start () {
     numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false 
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('Насколько оцените его?', '');
    
        if (a !=null && b !=null && a !='' && b !='' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        
        
    }
}

rememberMyFilms();


/* let num = 0;
while(num < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('Насколько оцените его?', '');
    if (a !=null && b !=null && a !='' && b !='' && a.length <50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
    console.log('error');
    num--;
    }
    num++;
    console.log(num);    
} */



function decectPesonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено очень мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >=30 ) {
        console.log("Вы киноман");
    } else {
        console.log("произошла ошибка!");
    }
}

decectPesonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i=1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i} `);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();

console.log(personalMovieDB);

/* if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}


let num = 50; 
while(num <= 55) {
    console.log(num);
    num++;
}

let result = '';
const length = 7;

for( let i = 1; i < length; i++) {
    for (let j = 0; j<i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

let cycle = 5;
while(cycle <=10) {
    console.log(cycle);
    cycle++;
}


for( let i = 20; i >= 10; i--) {
  if (i === 13) break;
  console.log(i);
}

for( i = 2; i<=10; i++) {
    if(i % 2 === 0) 
    console.log(i);
}

let Numb = 2;
while(Numb <= 16) {
    if(Numb % 0 === 2); 
    Numb++;
    console.log(Numb);
} */


