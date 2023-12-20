import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  
    // console.log(movies)
  
    return (
    <div className='px-6 '>
    <div>
        <h1 className=' text-lg md:text-3xl py-4 text-white '>{title}</h1>
        <div  className=' flex overflow-x-scroll no-scrollbar'>
             <div className=' flex'>
            {
                movies?.map(movie=> <MovieCard key={movie.id} posterPath ={movie.poster_path} originalTitle={movie.original_title}/>)
            }
           
        </div>
        </div>
       
    </div>
        
    </div>
  )
}

export default MovieList