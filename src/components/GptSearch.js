import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { MOVIE_BG } from '../utils/constant'


const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-20'>
        <img src={MOVIE_BG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch