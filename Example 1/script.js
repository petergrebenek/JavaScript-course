"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его", "");

personMovieDB.movies[a] = b;
personMovieDB.movies[c] = d;
console.log(personMovieDB);
