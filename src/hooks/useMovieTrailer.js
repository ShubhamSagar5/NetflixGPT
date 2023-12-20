import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies.trailerVideo)

  const getMoviesVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // console.log(filterData);

    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if(!trailerVideo){
       getMoviesVideo(); // trailer video empty then an only make an api call if already in store then do not make an api an api call
    }
   
  }, []);
};

export default useMovieTrailer;
