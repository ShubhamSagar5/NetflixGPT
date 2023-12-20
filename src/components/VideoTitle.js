import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[17%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h2 className=' text-xl mt-14 md:mt-0 md:text-6xl font-bold '>{title}</h2>
        <p className=' hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='mt-2 md:mt-0'>
            <button className=' bg-white text-black px-2 py-2 text-sm md:py-2 md:px-10 md:text-xl rounded-lg hover:bg-opacity-50'> ▶ Play </button>
            <button className=' hidden md:inline-block bg-white text-white p-2 px-10 mx-2 text-xl rounded-lg bg-opacity-30'> ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle