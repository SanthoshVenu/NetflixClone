import Header from './header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

useNowPlayingMovies();

  return (
    <div>
         <Header />
    </div>
  )
}

export default Browse