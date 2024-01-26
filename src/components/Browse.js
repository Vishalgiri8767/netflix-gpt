import Header from './Header'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer"
import usePopularMovies from '../hook/usePopularMovies';
import useTopRatedMovies from '../hook/useTopRatedMovies';
import useTrendingMovies from '../hook/useTrendingMovies';
import useTrendingShows from '../hook/useTrendingShows';
import useUpComingMovies from '../hook/useUpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Footer from './Footer';


const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
  const user = useSelector(store=>(store.user));
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useTrendingShows();
  useUpComingMovies();
  
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
      <Footer />
    
     
    </div>
  )
}

export default Browse