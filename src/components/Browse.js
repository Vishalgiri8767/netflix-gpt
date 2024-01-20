import Header from './Header'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer"

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondContainer />
    </div>
  )
}

export default Browse