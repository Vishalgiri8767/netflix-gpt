import React from 'react'

const VideoTitle = ({title, overview}) => {


  return (
    <div className='absolute w-screen aspect-video text-white bg-gradient-to-r from-black py-36 px-12  '>
        <h1 className='text-6xl font-serif font-bold mb-4'>{title}</h1>
        <h1 className='text-lg font-serif w-1/4 '>{overview}</h1>
        <div className='text-lg text-white font-bold flex gap-2 py-12'>
            <button className='bg-white text-black p-2 rounded-md px-6 hover:bg-opacity-80'  >▶️Play</button>
            <button className='bg-gray-800 p-2 rounded-md px-6 '>More Info</button>

        </div>

    </div>
  )
}

export default VideoTitle