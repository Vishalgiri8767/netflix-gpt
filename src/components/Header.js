import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react'
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { LANGUAGE_SUPPORTED } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';
import { USER_AVATAR } from '../utils/constant';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);


  const handleSingOut=()=>{
    signOut(auth).then(() => {

      // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
    });
    

  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleGptSearchClick=()=>{
      dispatch(toggleGptSearchView());
  };

  const handleLanguageChange =(e)=>{
      dispatch(changeLanguage(e.target.value));
  }

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
   
          const {uid, email, displayName, photoURL} = user;
           dispatch(addUser({
                    uid:uid, 
                    email:email, 
                    displayName:displayName, 
                    photoURL:photoURL })
                    );
          navigate("/browse");
        
        } else {
          // User is signed out
          dispatch(removeUser()); 
          navigate("/");  
        }
      });
      
      // unsubscribe when component unmounts.
      return ()=> unsubscribe();
  },[]);
    
  const handleNetflixClick =()=>{
    navigate("/browse");

  }
  return (
    
    <div className='absolute w-screen   z-10 py-2 px-8 bg-gradient-to-b from-black flex justify-between '>
        <div className='flex items-center gap-10  '>
          <img onClick={handleNetflixClick} 
            className='w-48 hover:cursor-pointer ' src={LOGO} alt='Netflix logo' 
          />
          {user && 
          <div className='flex gap-4 text-md text-gray-500 '>
            <Link to={"#"} className='font-semibold hover:text-gray-300 px-4 py-2 '>Home</Link>
            <Link to={ "#"} className='font-semibold hover:text-gray-300 px-4 py-2 '>TV Shows</Link>
            <Link to={"#"} className='font-semibold hover:text-gray-300 px-4 py-2 '>Movies</Link>
            <Link to={"#"} className='font-semibold hover:text-gray-300 px-4 py-2 '>Web Series</Link>
          </div>
          }
        </div>
       { user && 
        <div className='flex'>
          
        {showGptSearch &&  (<select  onChange={handleLanguageChange} className='font-semibold text-lg text-white bg-black px-2 my-6 rounded-md ml-4  '>
            {
              LANGUAGE_SUPPORTED.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))
            }
          </select>
    )}
          
        <button onClick={handleGptSearchClick} className='bg-purple-700 font-semibold text-lg text-white px-2 my-4 ml-4 rounded-md '>{showGptSearch ? "Home Page" : "GPT Search" }</button>
            
        {/* <button onClick={handleSingOut} className='font-semibold text-lg text-white bg-red-700 px-2 my-6 rounded-md ml-4 '>Sign Out</button> */}

          {/* <img className='h-14 w-14 my-3 p-1  ' src={user?.photoURL} /> */}

          <img
              id="dropdownDefaultButton"
              className="hidden md:inline-block w-12 h-12 cursor-pointer mx-2 my-4 ml-4"
              src={USER_AVATAR}
              onClick={toggleDropdown}
            />
             {isDropdownOpen && (
              <div className="absolute bg-[#333333] text-slate-400 mt-14 w-60 right-2 p-2 rounded-lg shadow-lg">
                <ul>
                  <div className="">Hey {user.email}👋 </div>
                  <button onClick={handleSingOut}>Sign out</button>
                </ul>
              </div>
            )}

        </div>
}
    </div>
  )
}

export default Header