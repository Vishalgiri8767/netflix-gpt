import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'


const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-20'>
        {/* <img src={MOVIE_BG} /> */}
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch