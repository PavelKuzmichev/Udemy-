"use strict";
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const question1 = prompt("Один из последних просмотренных фильмов?", "");
    const question2 = prompt("На сколько оцените его?", "");
    if (
      question1 != null &&
      question2 != null &&
      question1 != "" &&
      question2 != "" &&
      question1.length < 50 &&
      question2.length < 50
    ) {
      personalMovieDB.movies[question1] = question2;
    } else {
      i--;
    }
  }
}
rememberMyFilms();
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("просмотренно довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("произошла ошибка");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);
function writeYoursGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYoursGenres();
