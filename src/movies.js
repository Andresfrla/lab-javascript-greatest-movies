// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return directors

    let result = directors.filter((item,index)=>{
        return directors.indexOf(item) === index;
      })
    return result
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const filteredMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes("Drama") && eachMovie.director.toLowerCase() === 'steven spielberg'
    })
    
    return filteredMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0


    } else {
        const sumScore = moviesArray.reduce((acc, eachMovie) => {
            if (!eachMovie.score) {
                eachMovie.score = 0
            }
            return acc + eachMovie.score          
    }, 0)

    return Number((sumScore / moviesArray.length).toFixed(2))
    }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((eachDramaMovie) => {
        return eachDramaMovie.genre.includes('Drama')
    })

    const sumDramaMovies = dramaMovies.reduce((acc, eachDramaMovie) => {

        if (!eachDramaMovie.score) {
            eachDramaMovie.score = 0
        }
        return acc + eachDramaMovie.score / dramaMovies.length
    }, 0)
    return Number(sumDramaMovies.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movieCopy = [...moviesArray];
    const sortedMovies = movieCopy.sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year})
        
        return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title).sort()
    return titles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
