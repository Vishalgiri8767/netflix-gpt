import React from 'react'
import Header from '../components/Header'
import MovieList from '../components/MovieList';
import { useSelector } from 'react-redux';

const Movies = () => {

  const movies = useSelector(store => store.movies);

    

  return (
    <div>
      
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>


    </div>
  )
}

export default Movies