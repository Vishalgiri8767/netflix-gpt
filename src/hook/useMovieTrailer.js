import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {API_OPTIONS} from "../utils/constant";
import {addTrailerVideo} from "../utils/moviesSlice"

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store)=>store.movies.trailerVideo);

 //fetch trailer video. && updating the store with trailer video data
    const getMainMovieVideo = async ()=>{
        
            const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?",
            API_OPTIONS
            );


        const json = await data.json();
    //    console.log(json);

        const filterData = json.results.filter((video)=>video.type==="Trailer");
     //  console.log(filterData);

        const trailer = filterData.length ? filterData[0] : json.results[0];

       dispatch(addTrailerVideo(trailer));
    }

useEffect(()=>{
    !trailerVideo && getMainMovieVideo();
},[]);


};

export default useMovieTrailer;