import Header from './Header'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer"
import usePopularMovies from '../hook/usePopularMovies';
import useTopRatedMovies from '../hook/useTopRatedMovies';
import useTrendingMovies from '../hook/useTrendingMovies';
import useTrendingShows from '../hook/useTrendingShows';



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useTrendingShows();
 // useUpComingMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondContainer />
    </div>
  )
}

export default Browse