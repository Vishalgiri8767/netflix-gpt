import Header from './Header'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer"
import usePopularMovies from '../hook/usePopularMovies';
import useTopRatedMovies from '../hook/useTopRatedMovies';
import useTrendingMovies from '../hook/useTrendingMovies';
import useTrendingShows from '../hook/useTrendingShows';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useTrendingShows();
 // useUpComingMovies();
  
  return (
    <div>
      <Header/>
     { showGptSearch 
        ? 
        <GptSearch /> 
      : 
        <>  
          <MainContainer />
          <SecondContainer />
        </>  
    }
     
    </div>
  )
}

export default Browse