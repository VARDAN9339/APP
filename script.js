'use strict';

const numberOfFilms = +prompt('How films are you watched ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




for (let i = 0; i < 2; i++) {

    const a = prompt('One of the latest watched films?', ''),
          b = prompt('Rate film ?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
       
        personalMovieDB.movies[a] = b;
        console.log('done!');       

    } else {
        console.log('error!');
        i--;
    }     

}

if (personalMovieDB.count < 10) {
    console.log('less films!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('you are classic watcher');
} else if (personalMovieDB.count >= 30) {
    console.log('you are kinoman');
} else {
    console.log('error!!!');
}

console.log(personalMovieDB);

