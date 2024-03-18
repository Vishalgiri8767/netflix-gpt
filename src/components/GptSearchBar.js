import React, { useEffect, useRef, useState } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constant';
import {addGptMovieResult} from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const [loading, setLoading] = useState(false);
    const langKey = useSelector(store => store.config.lang);

    const searchMovieTmdb = async (movie) =>{
      const data = await fetch
                         ("https://api.themoviedb.org/3/search/movie?query="
                         + movie +
                         "&include_adult=true&  language=en-US&page=1", API_OPTIONS);
      const json =await data.json();
      return json.results;
    };
    
    const handleGptSearchClick = async ()=>{
      setLoading(true);
      console.log(searchText.current.value);
      const gptQuery = 
     "Act as a movie recommendation system and suggest some movies for the query "+
      searchText.current.value + 
      " Only give me name of 5 movies with comma seperated.result should always look like - Spider Man, Elemental, Phir Hera Pheri ";

      // make an API call to openai and get movie results.
      const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
     //     console.log(gptResults.choices?.[0]?.message?.content);
          
          const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
          // ["Bhool Bhulaiyaa, Go Goa Gone, Stree, Golmaal Again, 3 Idiots"]

          console.log(gptMovies);
          //for each gptMovies search TMDB Api.

          const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie));
          // [promise, promise, promise, promise, promise]//
          
          const tmdbResults = await Promise.all(promiseArray);   
          setLoading(false); 
          console.log(tmdbResults);
          dispatch(addGptMovieResult({movieNames:gptMovies ,movieResults:tmdbResults}));
          
        }

      
  return (
    <div className='pt-[10%] flex flex-col justify-center items-center  bg-gray-600 '>
      <div className=' w-screen mb-5'>
        <h1 className='text-center text-3xl font-serif'>{lang[langKey].movieGuru}</h1>
      </div>

        <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 mb-10  grid grid-cols-12   '>
            <input type='text' ref={searchText}
                    className='p-4 m-4 rounded-lg col-span-9 text-lg' 
                    placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button onClick={handleGptSearchClick}
                 className='p-4 m-4 col-span-3 text-xl text-white bg-red-500 rounded-lg'>

           {loading && (
              <div className="fixed top-1/2 md:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center space-x-2">
                      <div className="w-16 h-16 relative">
                          <div className="w-full h-full border-t-4 border-r-4 border-b-4 border-red-500 rounded-full animate-spin absolute top-0 left-0"></div>
                          <div className="w-full h-full border-t-4 border-r-4 border-b-4 border-transparent rounded-full animate-spin absolute top-0 left-0 animate-reverse"></div>
                      </div>
                      <div className="text-red-500 text-xl font-semibold">Loading...</div>
                  </div>
              </div>
            )}

                  {lang[langKey].search}
            </button>
        </form>

    </div>
  )

}

export default GptSearchBar;