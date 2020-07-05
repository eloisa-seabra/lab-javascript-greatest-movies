// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  return moviesArray.map(value => value.director);
}
getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  return array.filter(
    value =>
      value.director === 'Steven Spielberg' &&
      value.genre.some(genre => genre === 'Drama')
  ).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  const totalRating = array.reduce(function (accumulator, value) {
    const currentRating = accumulator + value.rate;
    return currentRating;
  }, 0);
  return Math.round((totalRating / array.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  const totalRating = array
    .filter(value => value.genre === 'Drama')
    .reduce(function (accumulator, value) {
      const currentRating = accumulator + value.rate;
      return currentRating;
    }, 0);
  return Math.round((totalRating / array.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const byYear = array.map(function (value) {
    return value.year;
  });
  return byYear.sort(function (first, second) {
    if (first < second) {
      return -1;
    } else if (first > second) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const AlphaOrder = array.map(function (value) {
    return value.title;
  });
  return AlphaOrder.sort(function (first, second) {
    if (first < second) {
      return -1;
    } else if (first > second) {
      return 1;
    } else {
      return 0;
    }
  });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
