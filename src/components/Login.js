import { useState, useRef } from "react"
import Header from "./Header"
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {USER_AVATAR, MOVIE_BG} from "../utils/constant";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);

  const [emailPhone, setEmailPhone] = useState("user01@demo.com");
  const [passwor, setPasswor] = useState("Vishal@123")

  const handleEmailPhone= (event)=>{
    setEmailPhone(event.target.value);
  };
  const handlePassword = (event)=>{
    setPasswor(event.target.value);
  }

  const handleButtonClick = ()=>{
       //form validation
    const message = 
          checkValidData(email.current.value, password.current.value);  
    setErrorMessage(message);

    if(message) return;  // if some error in email and password that error message contain
                        // and it is true it return back.

    if(!isSignInForm){
      //sign up logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: USER_AVATAR,
        }).then(() => {
          // Profile updated!

          const {uid, email, displayName, photoURL} = auth.currentUser;
               dispatch(addUser({
                        uid:uid, 
                        email:email, 
                        displayName:displayName, 
                        photoURL:photoURL })
                        );


        }).catch((error) => {
          setErrorMessage(errorMessage);
        });
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode);
        
  });

    } 
    
    else{
      //signed in logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        
        const user = userCredential.user;

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setErrorMessage(errorCode+"-"+errorMessage);
        setErrorMessage(errorCode)

      });
    }                     
  }

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  };

 
  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src={MOVIE_BG} alt="bg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=" absolute w-3/12 my-20 mx-auto left-0 right-0  p-12 bg-black bg-opacity-85 text-white  ">

        <h1 className="font-bold text-3xl  my-6 ">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4  w-full my-2 rounded-md bg-[#333333] text-base outline-none"/>}

        <input ref={email} type="email" placeholder="Email Address" onChange={handleEmailPhone} value={emailPhone}  className="p-4  w-full my-2 rounded-md bg-[#333333] text-base outline-none"/>

        {!isSignInForm && <input ref={mobile} type="tel" placeholder="Mobile Number" className="p-4 text-base my-2 w-full rounded-md bg-[#333333] outline-none" />}
        <input ref={password} type="password" onChange={handlePassword} value={passwor} placeholder="Password" className="p-4 text-base my-2 w-full rounded-md bg-[#333333] outline-none" />

      
        <p className="text-red-700 text-center text-xl font-bold mt-5">{errorMessage}</p>

        <button className="p-4  my-6 font-semibold text-base rounded-md w-full bg-red-800" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p onClick={toggleSignInForm}  className="text-gray-500 cursor-pointer">


          { isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In Now. "}</p>
        <p className="text-xs mt-4">This page is protected by Google reCAPTCHA to ensure you're not a bot. <button>Learn More</button> </p>

      </form>
      
    </div>
  )
}

export default Login