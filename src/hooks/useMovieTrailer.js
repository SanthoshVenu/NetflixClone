import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) =>{
const dispatch = useDispatch();
const getMovieVideos = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
    );
    const json = await data.json();
    console.log(json);
    const filteredTrailerData = json?.results.filter(
        (res) => res.type === "Trailer",
    );
    console.log("FilteredTrailerData", filteredTrailerData);
    const trailer = filteredTrailerData.length
        ? filteredTrailerData[0]
        : json.results[0];
    console.log("Trailer", trailer);
    dispatch(addTrailerVideo(trailer));
};

useEffect(() => {
    getMovieVideos();
}, []);
}

export default useMovieTrailer;
