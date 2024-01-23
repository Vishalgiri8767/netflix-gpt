import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath, movieName, avgRating}) => {

  if(!posterPath) return null;

  return (
    <div className='w-44 h-72 bg-black pr-4 text-white'>
      < img className='rounded-lg h-52' alt='movie name' 
        src={IMG_CDN_URL + posterPath }
      />
    <p className=' pr-4 pt-0 text-sm '>{movieName}</p>
    <p className='font-serif text-xs'>IMDB:   {avgRating}</p>
    </div>
  )
}

export default MovieCard