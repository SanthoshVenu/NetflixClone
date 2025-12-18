import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            console.log("Inside movie slice", action.payload);
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
