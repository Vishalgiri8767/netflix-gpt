import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Home from "./Home";
import { RouterProvider,createBrowserRouter } from "react-router-dom";


const Body = ()=>{

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            
        },
        
        {
            path: "/browse",
            element: <Browse />     
        },
        {
            path: "/home",
            element: <Home />
        }
    ]);


    return(
      <div>
       < RouterProvider router = {appRouter} />
      </div>  
    );
}
export default Body;