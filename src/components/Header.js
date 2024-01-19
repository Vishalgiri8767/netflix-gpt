import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSingOut=()=>{
    signOut(auth).then(() => {

      // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
    });
    

  };
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
    

  return (
    
    <div className='absolute w-screen z-10 py-2 px-8 bg-gradient-to-b from-black flex justify-between '>
        <img 
          className='w-48 ' src={LOGO} alt='Netflix logo' 
        />
       { user &&
        <div className='flex'>
          <button onClick={handleSingOut} className='font-bold text-lg bg-red-700 px-4 m-4 rounded-md '>Log Out</button>
          <img className='h-14 w-14 my-3 p-1  ' src={user?.photoURL} />
        </div>
}
    </div>
  )
}

export default Header