import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GPTMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { moviesNames, movieResults } = gpt;

  if (!moviesNames) return null; //show shimmer ui

  return (
    <div className="p-4  bg-black text-white rounded-lg bg-opacity-70 m-10">
      <div>
        {moviesNames.map((movieName,index) => (
          <MovieList key="" title={movieName} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
