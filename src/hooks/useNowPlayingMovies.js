import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { NOW_PLAYING_MOVIES_URL } from '../utils/constant';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const movies = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
        const moviesData = await movies.json();
        console.log("Movies List", moviesData);
        dispatch(addNowPlayingMovies(moviesData.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;