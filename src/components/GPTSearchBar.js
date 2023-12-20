import React, { useRef } from 'react'
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from "react-redux";
import openai from '../utils/OpenAi';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResults } from '../utils/gptSlice';

const GPTSearchBar = () => {
  
  const dispatch = useDispatch()
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null)
 
  

  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()

    return json.results
  }


  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value)
    //make an api call to get an movie

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ".only give me names of 5 Movie, comma seperated like the example results given ahead. Example Results: Gadar, Sholay, Don, Golmaal, koi Mil Gaya " 
    const getResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptQuery  }],
      model: 'gpt-3.5-turbo',
    });

    if(!getResults.choices){
      //show error code mess
    }

    console.log(getResults.choices?.[0].message?.content)
  
    const gptMoviesList = getResults.choices?.[0].message?.content.split(",")
  
    const data = gptMoviesList.map(movie =>  searchMovieTMDB(movie))
  
    const tmdbResults = await Promise.all(data)

    dispatch(addGPTMovieResults({moviesNames: gptMoviesList, movieResults: tmdbResults}))
  }
  
  return (
    <div className=' pt-[42%] md:pt-[9%] md:flex justify-center'>
      <form  className=' w-full  md:w-1/2  bg-black grid grid-cols-12 rounded-lg ' onSubmit={(e)=> e.preventDefault()}>
        <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-lg ' placeholder={lang[langKey].getPlaceHolder} />
        <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar