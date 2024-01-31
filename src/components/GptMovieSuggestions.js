import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {

  const {movieNames,movieResults} = useSelector((store)=>store.gpt);
  if(!movieNames) return null;

  return (
    <div className='p-4   text-white bg-gray-600 '>
      <div>
        {movieNames.map((movieName, index) => (
        <MovieList 
          key={movieName} 
          title={movieName} 
          movies={movieResults[index]} 
        />) )}
       
      </div>
    </div>
  )
}

export default GptMovieSuggestions