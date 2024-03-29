import { useDispatch, useSelector } from "react-redux";
import {  addTrendingShows } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useTrendingShows = ()=>{

    // fetch data from TMDB api and update store.
  const dispatch = useDispatch();
  const trendingShows = useSelector(store=>store.trendingShows);
  const getTrendingShows = async ()=>{
    const data = await fetch

    ('https://api.themoviedb.org/3/trending/tv/week', API_OPTIONS)

    const json = await data.json();

    dispatch(addTrendingShows(json.results));
  
  }

  useEffect(()=>{
  !trendingShows &&  getTrendingShows();
  },[]);

}; 

export default useTrendingShows;