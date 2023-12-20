import MovieList from "./MovieList";
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className=" bg-black w-screen ">
          <div className=" mt-0 pl-4  md:-mt-40 relative z-20 md:pl-12" >
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
          <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
          <MovieList title={"Popular"} movies={movies?.popularMovies}/>
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}/>
          </div>
          

    
    
    
    
    
    </div>
 )
  )
}


export default SecondaryContainer;
