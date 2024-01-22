import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useUpComingMovies = ()=>{

    // fetch data from TMDB api and update store.
  const dispatch = useDispatch();
  
  const getUpComingMovies = async ()=>{
    const data = await fetch

      ('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);

    const json = await data.json();

    dispatch(addUpComingMovies(json.results));
  
  }

  useEffect(()=>{
    getUpComingMovies();
  },[]);

}; 

export default useUpComingMovies;