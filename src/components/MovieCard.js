import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath,originalTitle}) => {
//   console.log(posterPath)

  if(!posterPath) return null // show poster or dummy poster 
    return (
    <div className=' w-36 md:w-48 pr-4'>
        <img src={IMG_CDN_URL+posterPath} alt={originalTitle} />
    </div>
  )
}

export default MovieCard