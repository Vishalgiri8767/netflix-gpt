import { useState } from "react"
import Header from "./Header"
import { Link } from "react-router-dom"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = ()=>{

    setIsSignInForm(!isSignInForm);

  }


  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <form className=" absolute w-3/12 my-36 mx-auto left-0 right-0  p-12 bg-black bg-opacity-85 text-white  ">

        <h1 className="font-bold text-3xl  my-6 ">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4  w-full my-2 rounded-md bg-[#333333] text-base outline-none"/>}

        <input type="email" placeholder="Email Address" className="p-4  w-full my-2 rounded-md bg-[#333333] text-base outline-none"/>

        {!isSignInForm && <input type="tel" placeholder="Mobile Number" className="p-4 text-base my-2 w-full rounded-md bg-[#333333] outline-none" />}
        <input type="password" placeholder="Password" className="p-4 text-base my-2 w-full rounded-md bg-[#333333] outline-none" />

        <button className="p-4  my-6 font-semibold text-base rounded-md w-full bg-red-800">{isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p onClick={toggleSignInForm}  className="text-gray-500 cursor-pointer">
          { isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In Now. "}</p>
        <p className="text-xs mt-4">This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="#" >Learn more.</Link> </p>
      </form>
      
    </div>
  )
}

export default Login