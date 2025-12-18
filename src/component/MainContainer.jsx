import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    const moviesList = useSelector((state)=> state.movies.nowPlayingMovies);
    console.log("MoviesList...", moviesList);
    if(!moviesList) return;

    const {title,overview,id} = moviesList[0];
  return (
    <div>
        <VideoTitle title = {title} overview={overview}/>
        <VideoContainer movieId = {id} />
    </div>
  )
}

export default MainContainer