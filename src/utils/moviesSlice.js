import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        trendingMovies: null,
        

    },
    reducers:{
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action)=>{
            state.popularMovies = action.payload;
        },
        addUpComingMovies : (state, action)=>{
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies : (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addTrendingMovies : (state, action)=>{
            state.trendingMovies = action.payload;
        },
        addTrendingShows : (state, action)=>{
            state.trendingShows = action.payload;
        },
        addTrailerVideo : (state, action)=>{
            state.trailerVideo = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpComingMovies,addTopRatedMovies,addTrendingMovies, addTrendingShows}= moviesSlice.actions;
export default moviesSlice.reducer;