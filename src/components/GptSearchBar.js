import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center  '>
        
        <form className='w-1/2  bg-black grid grid-cols-12   '>
            <input type='text'
                    className='p-4 m-4 rounded-lg col-span-9' 
                    placeholder='What would you like to watch today?' />
            <button className='p-4 m-4 col-span-3 text-white bg-red-500 rounded-lg'>Search</button>
        </form>

    </div>
  )
}

export default GptSearchBar