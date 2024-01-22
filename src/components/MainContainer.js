import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    const dayMovie = useSelector((store)=>store.movies?.popularMovies);
    if(!movies) return;         //early return

    const mainMovie = movies[0];
   // console.log(mainMovie);

    const{original_title, overview, id} = mainMovie;
    

  return (
    <div>
         <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
       
    </div>
  )
}

export default MainContainer