import React from 'react'
import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {


  return (
    <div className='px-6 py-8  '>
        <h1 className='text-3xl py-4 text-white'>{title}</h1>

        <div className='flex flex-row overflow-x-scroll no-scrollbar '>
        
        <div className='flex flex-row'>
        
        {/* {movies?.map(movie=><MovieCard key={movie.id} posterPath={movie?.poster_path} movieName={movie?.title} avgRating={movie?.vote_average} /> )} */}
        
        {movies && movies.length > 0 ? (
            movies?.map((movie,index) => (
              <MovieCard  key={movie?.id} posterPath={movie?.poster_path} />
            ))
          ) : (
            <p>No movies to display</p>
          )}

      </div>
      </div>
    </div>
  )
}

export default MovieList