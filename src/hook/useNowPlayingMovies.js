import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{

    // fetch data from TMDB api and update store.
  const dispatch = useDispatch();
  
  const getNowPlayMovies = async ()=>{
    const data = await fetch
      // ('https://api.themoviedb.org/3/trending/all/day?language=en-US', API_OPTIONS) //todays trending

        ('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  
  }

  useEffect(()=>{
    getNowPlayMovies();
  },[]);

}; 

export default useNowPlayingMovies;