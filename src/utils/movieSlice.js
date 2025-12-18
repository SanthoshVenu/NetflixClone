import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            console.log("Inside movie slice", action.payload);
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action) =>{
            console.log("Inside trailer slice",action.payload);
            state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
