import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath, movieName, avgRating}) => {
// const [movieInfo, setMovieInfo] = useState(null);
  
  const [isHovered, setIsHovered] = useState(false);
  if(!posterPath) return null;

  const handleMouseEnter= () =>{
    setIsHovered(true);
    // setMovieInfo({movieName});
  };
  const handleMouseLeave =()=>{
    setIsHovered(false);
  };
  const imageStyle = {
    transform: isHovered ? 'scale(1.2)' : 'scale(1)', // Enlarge on hover
    transition: 'transform 0.7s ease-in-out', // Smooth transition effect
  };

  return (
    <div className='w-56 h-80 pr-4 text-white flex justify-center items-center ' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      
      < img className='rounded-lg h-64 w-48  ' alt='movie name' 
        src={IMG_CDN_URL + posterPath }
        style={imageStyle}

      />  
      {/* <div className='absolute top-80 '>
        <p className=' pr-4 pt-0 bg text-lg '>{movieName}</p>
        <p className='font-serif text-xs'>IMDB:   {avgRating}</p>
      </div> */}

    </div>

  )
}

export default MovieCard