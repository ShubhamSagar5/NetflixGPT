import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        moviesNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearchView:(state,action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGPTMovieResults:(state,action) => {
            const {moviesNames,movieResults} = action.payload
            state.moviesNames = moviesNames;
            state.movieResults = movieResults
        }
    },
});


export const {toggleGptSearchView,addGPTMovieResults} = gptSlice.actions;

export default gptSlice.reducer