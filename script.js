const numberOfFilms = +prompt('How films are you watched ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('One of the latest watched films?', ''),
      b = prompt('Rate film ?',''),
      c = prompt('One of the latest watched films?', ''),
      d = prompt('Rate film ?','');


personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;    

console.log(personalMovieDB);