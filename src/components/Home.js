import React from 'react'
import Login from "../components/Login"
import { Link, useNavigate,withRouter } from 'react-router-dom'
import { LOGO } from '../utils/constant';
import Header from '../components/Header';

const Home = () => {

  const navigate = useNavigate();
  const handleSignIn =()=>{
    navigate( "/");
  }

  return (

    <div className='relative w-full h-full bg-gradient-to-l from-black  '>
      
       <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg' alt='netflix bg'/>

      <div className="absolute top-0  px-16 h-full  w-full flex gap-10 justify-between ">
       <img className=' w-48 h-24 py-2 my-4 ' src={LOGO} alt='netflix logo' />
       <button  className='h-12 my-6 px-4 font-semibold text-white text-lg rounded-lg bg-red-800 cursor-pointer' onClick={handleSignIn}>
                Sign In
          </button>
      </div>
        <div className='absolute w-full h-full top-0  flex flex-col justify-center items-center text-white gap-5'>
          <h1 className='text-5xl -mt-40 font-extrabold '>
            Unlimited movies, TV shows and more.
          </h1>
          <p className='text-3xl font-bold '>Watch anywhere. Cancel anytime.</p>
          <p className='text-2xl font-semibold'>Ready to watch? Enter your email to create or restart your membership.</p>

          <button  className='h-12 my-6 px-4 font-semibold text-white text-lg rounded-lg bg-red-800 cursor-pointer' onClick={handleSignIn}>
                Sign In
          </button>
        </div>
    </div>
  )
}

export default Home;