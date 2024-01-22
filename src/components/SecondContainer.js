import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'

const SecondContainer = () => {

  const movies = useSelector(store => store.movies);

  return( 
    movies.nowPlayingMovies &&  (
    <div className=' bg-black'>
      <div className='-mt-96 relative z10 pl-6'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies}/>
        {/* <MovieList title={"Trending Shows"} movies={movies.trendingShows}/> */}
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />

        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      </div>
    </div>
  )
  )
}

export default SecondContainer